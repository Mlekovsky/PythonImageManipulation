FROM python:3.6.5-alpine
RUN apk --update add bash nano
ENV STATIC_URL /static
ENV STATIC_PATH /var/www/app/static
COPY ./requirements.txt /var/www/requirements.txtd
RUN pip install -r /var/www/requirements.txt
CMD ["python","app.py"]