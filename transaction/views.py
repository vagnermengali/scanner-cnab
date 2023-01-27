from rest_framework.generics import RetrieveAPIView, ListAPIView, DestroyAPIView
from rest_framework.views import APIView, Request, Response, status
from rest_framework.parsers import MultiPartParser
import json
from .models import Transaction
from .serializers import TransactionSerializer
from .utils import get_stores_in_db, clear_data, write_file

class TransactionUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request: Request, format=None) -> Response:
        file_obj = request.data.get("file", default=None)
        if file_obj is None:
            return Response(
                data={"file": "This field is required."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        write_file(file_obj=file_obj)

        df = clear_data(data_file="cnab.txt")
        json_list = json.loads(json.dumps(list(df.T.to_dict().values())))
        data = []
        for dict_item in json_list:
            instance = Transaction.objects.create(**dict_item)
            data.append(instance)

        serializer = TransactionSerializer(data=data, many=True)
        serializer.is_valid()
        return Response(data={"details": "Scan completed successfully"},status=status.HTTP_200_OK)

class TransactionAllView(ListAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def get(self, request, *args, **kwargs):
        transactions = Transaction.objects.all()
        
        if len(transactions) == 0 :
            return Response(data={'details': 'Transaction list is empty'},status=status.HTTP_404_NOT_FOUND)
        
        serializer = self.get_serializer(transactions, many=True)

        return Response(data={'total': len(serializer.data),'results': serializer.data},status=status.HTTP_200_OK)

class TransactionAllDeleteView(APIView):
    def delete(self, request):
        transactions = Transaction.objects.all()
        
        if len(transactions) == 0 :
            return Response(data={'details': 'There are no transactions to delete'},status=status.HTTP_404_NOT_FOUND)
        
        Transaction.objects.all().delete()
        
        return Response(data={'details': 'Transactions have been successfully deleted'},status=status.HTTP_200_OK)

class TransactionStoreView(RetrieveAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    lookup_field = 'store'

    def get(self, request, *args, **kwargs):
        stores = get_stores_in_db(queryset=Transaction.objects.all)
        store_name = self.kwargs['store']

        if store_name.upper().replace("+", " ").replace("-", "") not in stores:
            return Response(data={'details': 'Store not found', 'stores': stores},status=status.HTTP_404_NOT_FOUND)
        
        self.queryset = Transaction.objects.filter(store__icontains=store_name.upper().replace("+", " ").replace("-", ""))
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
   
        return Response(data={'total': len(serializer.data),'results': serializer.data},status=status.HTTP_200_OK)

"""     queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    lookup_field = 'store'

    def get(self, request, *args, **kwargs):
        stores = get_stores_in_db(queryset=Transaction.objects.all)
        store_name = self.kwargs['store']
        stores_treated = [unicodedata.normalize('NFKD', store.lower()).replace(" ", "").replace("-", "").encode('ASCII', 'ignore').decode() for store in stores]

        if store_name.replace(" ", "").lower() not in stores_treated:
            return Response(data={'details': 'Store not found', 'stores': stores},status=status.HTTP_404_NOT_FOUND)
        
        filtered_stores = []
        for store in stores_treated:
            if store_name in store:
                filtered_stores.append(store)
   
        return Response(data={'results': filtered_stores},status=status.HTTP_200_OK)
 """