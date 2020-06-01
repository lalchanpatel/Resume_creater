from django.contrib import admin

# Register your models here.
from App.models import resume, user


admin.site.register(resume)
admin.site.register(user)
