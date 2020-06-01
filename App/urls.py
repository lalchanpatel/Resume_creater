from django.conf.urls.static import static
from django.urls import path
from django.conf import settings
from .import views

urlpatterns = [
    path('', views.index, name='index'),
    path('build/', views.build, name='build'),
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('logout/', views.logout, name='logout'),
    path('enter_detail/', views.enter_detail, name='enter_detail'),
    path('fetching_data/', views.fetching_data, name='fetching_data'),
    path('pdf/', views.pdf, name='pdf'),


]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
