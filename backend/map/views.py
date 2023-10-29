from django.shortcuts import render
from django.db import connection
from django.http import JsonResponse


def TimeView(request):
    with connection.cursor() as cursor:
        cursor.execute("SELECT NOW();")
        time = cursor.fetchone()
        data = {'time': time}

    return JsonResponse(data)

