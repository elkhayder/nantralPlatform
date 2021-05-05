""" Utils function to query geocoding."""
import requests
from typing import List
from urllib.parse import quote


from django.conf import settings


def geocode(search: str) -> List[str]:
    results = requests.get(
        f'https://api.mapbox.com/geocoding/v5/mapbox.places/'
        f'{quote(search)}.json'
        '?proximity=47.2186371,-1.5541362'
        '&autocomplete=true'
        '&country=fr'
        '&types=address'
        '&limit=3'
        f'&access_token={settings.MAPBOX_API_KEY}')
    return [{
        'place_name': x['place_name'],
        'long': x['geometry']['coordinates'][0],
        'lat': x['geometry']['coordinates'][1]
    } for x in results.json()['features']]
