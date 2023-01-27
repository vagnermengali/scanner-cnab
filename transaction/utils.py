from django.core.files.storage import default_storage
import unicodedata
import pandas as pd

def get_stores_in_db(queryset):
    values = []
    for store in queryset():
        values.append(store)
    store_names_list = []
    for item in values:
        if item.store not in store_names_list:
            store_names_list.append(item.store)
    return store_names_list

def hour_format(i: str) -> str:
    return f"{i[0:2]}:{i[2:4]}:{i[4:6]}"

def convert_values_by_100(value: str) -> float:
    return float(value) / 100.00


def convert_text(string: str) -> str:
    return unicodedata.normalize('NFKD', string.rstrip()).encode('ASCII', 'ignore').decode().replace("- ", "")


def clear_data(data_file):
    max_length = [1, 8, 10, 11, 12, 6, 14, 19]
    description = [ 'transaction', 'date', 'value', 'cpf', 'card', 'hour', 'owner', 'store']

    txt = read_txt(data_file, max_length, description)
    df = pd.DataFrame(txt)

    df["date"] = pd.to_datetime(df["date"], format="%Y%m%d")
    df["date"] = df["date"].astype(str)
    df["transaction"] = df["transaction"].astype(str)
    df["hour"] = df["hour"].apply(hour_format)
    df["value"] = df["value"].apply(convert_values_by_100)
    df["owner"] = df["owner"].apply(convert_text)
    df["store"] = df["store"].apply(convert_text)

    return df

def read_txt(data_file, max_length: list[int], description: list[str]) -> list:
    with open(data_file, "r", encoding="utf-8") as data:
        file = [item for item in data]
        res = []
        for line in file:
            strt = 0
            dict_item = {}
            for index, size in enumerate(max_length):
                dict_item.update({f"{description[index]}": line[strt : strt + size]})
                strt += size
            res.append(dict_item)
        return res

def write_file(file_obj):

    FILENAME = "CNAB.txt"
    try:
        with default_storage.open("tmp/" + FILENAME, "wb+") as destination:
            for chunk in file_obj.chunks():
                destination.write(chunk)
        return True
    except:
        return False
    