import qrcode as qr 
url = input("Enter url: ")
img = qr.make(url)
img_name = input("Type img Name: ")

if not img_name.endswith(".png"):
    img_name += ".png" 

img.save(img_name)