from django.contrib import admin
from django.urls import path
from . import views
# from catering import views
urlpatterns = [
    # path("admin/", admin.site.urls),
    path("",views.home,name='home'),
    path('aboutus/',views.aboutus,name='aboutus')
]
