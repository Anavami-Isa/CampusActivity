import requests
import json

# API auth
url = "https://besttime.app/api/v1/keys/pri_bb8ec53d767d4b879d7bfa8295c8c2b9"
response = requests.request("GET", url)
url = "https://besttime.app/api/v1/forecasts"
# End of API auth

# HorseShoe data
horseData = {
    'api_key_private': 'pri_bb8ec53d767d4b879d7bfa8295c8c2b9',
    'venue_name': 'The Horseshoe',
    'venue_address': 'Sumter St Columbia, SC 29208 United States'
}
horseResponse = requests.request("POST", url, params=horseData)
with open('locations/horseData.json', 'w', encoding='utf-8') as f:
    json.dump(horseResponse.json(), f, ensure_ascii=False, indent=4)

# Russell House data
russellData = {
    'api_key_private': 'pri_bb8ec53d767d4b879d7bfa8295c8c2b9',
    'venue_name': 'Russell House University Union',
    'venue_address': '1400 Greene St Columbia, SC 29208 USA'
}
russellResponse = requests.request("POST", url, params=russellData)
with open('locations/russellData.json', 'w', encoding='utf-8') as f:
    json.dump(russellResponse.json(), f, ensure_ascii=False, indent=4)

# STWFC data
stromData = {
    'api_key_private': 'pri_bb8ec53d767d4b879d7bfa8295c8c2b9',
    'venue_name': 'Strom Thurmond Wellness and Fitness Center',
    'venue_address': '1000 Blossom St Columbia, SC 29201'
}
stromResponse = requests.request("POST", url, params=stromData)
with open('locations/stromData.json', 'w', encoding='utf-8') as f:
    json.dump(stromResponse.json(), f, ensure_ascii=False, indent=4)

# Swearingen data
swearData = {
    'api_key_private': 'USC College of Engineering and Computing',
    'venue_name': 'The Horseshoe',
    'venue_address': '301 Main St. Columbia, SC 29208'
}
swearResponse = requests.request("POST", url, params=swearData)
with open('locations/swearData.json', 'w', encoding='utf-8') as f:
    json.dump(swearResponse.json(), f, ensure_ascii=False, indent=4)

# Tcoop data
tcoopData = {
    'api_key_private': 'pri_bb8ec53d767d4b879d7bfa8295c8c2b9',
    'venue_name': 'Thomas Cooper Library',
    'venue_address': '1322 Greene St Columbia, SC 29208 United States'
}
tcoopResponse = requests.request("POST", url, params=tcoopData)
with open('locations/tcoopData.json', 'w', encoding='utf-8') as f:
    json.dump(tcoopResponse.json(), f, ensure_ascii=False, indent=4)

#300 Main
MainData = {
    'api_key_private': 'pri_bb8ec53d767d4b879d7bfa8295c8c2b9',
    'venue_name': 'Civil and Environmental Engineering and Mechanical Engineering',
    'venue_address': '300 Main St Columbia, SC 29208'
}
MainResponse = requests.request("POST", url, params=MainData)
with open('locations/MainData.json', 'w', encoding='utf-8') as f:
    json.dump(MainResponse.json(), f, ensure_ascii=False, indent=4)

#Blatt
BlattData = {
    'api_key_private': 'pri_bb8ec53d767d4b879d7bfa8295c8c2b9',
    'venue_name': 'Solomon Blatt Physical Education Center',
    'venue_address': '1300 Wheat St Columbia, SC 29208'
}
BlattResponse = requests.request("POST", url, params=BlattData)
with open('locations/BlattData.json', 'w', encoding='utf-8') as f:
    json.dump(BlattResponse.json(), f, ensure_ascii=False, indent=4)

#Booker T
BookerData = {
    'api_key_private': 'pri_bb8ec53d767d4b879d7bfa8295c8c2b9',
    'venue_name': 'Booker T. Washington Auditorium',
    'venue_address': '1400 Wheat St Columbia, SC 29201 United States'
}
BookerResponse = requests.request("POST", url, params=BookerData)
with open('locations/BookerData.json', 'w', encoding='utf-8') as f:
    json.dump(BookerResponse.json(), f, ensure_ascii=False, indent=4)

#Coliseum
ColiseumData = {
    'api_key_private': 'pri_bb8ec53d767d4b879d7bfa8295c8c2b9',
    'venue_name': 'Carolina Coliseum',
    'venue_address': '701 Assembly St Columbia, SC 29201'
}
ColiseumResponse = requests.request("POST", url, params=ColiseumData)
with open('locations/ColiseumData.json', 'w', encoding='utf-8') as f:
    json.dump(ColiseumResponse.json(), f, ensure_ascii=False, indent=4)

#Law School
LawData = {
    'api_key_private': 'pri_bb8ec53d767d4b879d7bfa8295c8c2b9',
    'venue_name': 'University of South Carolina School of Law',
    'venue_address': '1525 Senate St Columbia, SC 29208 United States'
}
LawResponse = requests.request("POST", url, params=LawData)
with open('locations/LawData.json', 'w', encoding='utf-8') as f:
    json.dump(LawResponse.json(), f, ensure_ascii=False, indent=4)