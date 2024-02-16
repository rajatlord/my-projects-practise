#logging
#this file wants a extension file . file name is 'helper.py'
import logging
logging.basicConfig(level=logging.DEBUG , format=' %(asctime)s - %(name)s - %(levelname)s - %(message)s', datefmt='%m/%d/%y %H:%M:%S')

logging.debug('This is a debug message')
logging.info( 'This is an info message')
logging.warning( 'This is a warning message')
logging.error( 'This is an error message')
logging.critical( 'This is a critical message')
