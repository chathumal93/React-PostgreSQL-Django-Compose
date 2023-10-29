FROM python:3.9-alpine3.18

ENV PYTHONDONTWRITEBYTECODE=1

ENV PYTHONUNBUFFERED=1

WORKDIR /code

COPY requirements.txt /code/

RUN apk add --no-cache postgresql-dev

RUN apk add --no-cache --virtual .build-deps build-base linux-headers \
    && pip3 install pip --upgrade \
    && pip3 install -r requirements.txt \
    && apk del .build-deps

COPY . .

EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]