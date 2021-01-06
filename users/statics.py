from django.http import FileResponse
from django.conf import settings
import os


def returnLogo(request):
    path = os.path.join(settings.BASE_DIR, 'media/collabCentr.jpg')
    image = open(path,'rb')
    response = FileResponse(image)
    return response 