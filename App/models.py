from django.db import models

# Create your models here.


class user(models.Model):
    email = models.CharField(max_length=30, primary_key=True)
    username = models.CharField(max_length=30)
    phone = models.CharField(max_length=13)
    password = models.CharField(max_length=20)

    def __str__(self):
        return self.email


class resume(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    jsonfile = models.FileField(upload_to='App/json/', null=True, blank=True, default="")
    docxfile = models.FileField(upload_to='App/docx/', null=True, blank=True, default="")
    pdfFile = models.FileField(upload_to='App/pdf/', null=True, blank=True, default="")

    def __str__(self):
        return "pdfFile"
