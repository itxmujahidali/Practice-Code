import smtplib
from random import randint

gmail_user = "example@gmail.com"
gmail_pwd = "enteryourpasswordhere"
TO = 'example@gmail.com'
SUBJECT = "SIS Recovery Code"
TEXT = "Your recovery code is: "
server = smtplib.SMTP('smtp.gmail.com', 587)
server.ehlo()
server.starttls()
server.login(gmail_user, gmail_pwd)

#generating random numbers
number_generate = randint(100001,999999)

BODY = '\r\n'.join(['To: %s' % TO,
        'From: %s' % gmail_user,
        'Subject: %s' % SUBJECT,
        '', TEXT+str(number_generate)])

server.sendmail(gmail_user, [TO], BODY)

print (f'Email has been send! \nRecovery code is: {number_generate}')

''' -------- Note ----------
    Before send this email, Make sure
    you turn ON your gmail setting "Less app secure". '''
