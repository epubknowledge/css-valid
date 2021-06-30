# !/bin/bash

# date: 21-06-30
# dev: codingChewie
# purpose: validates CSS
# version: 1.1
# name: cssvalid.sh

## set variables ##
FOLDER="css_valid"
LOCATION="/Users/$USER"
TIMESTAMP=$(date '+%d/%m/%Y %H:%M:%S')

echo $TIMESTAMP
for cssfiles in $(find "$LOCATION/$FOLDER" -name "*.css" ! -name "epub3.css"); do
	cd $LOCATION/$FOLDER/_runner
	## newfile="$TIMESTAMP$cssfiles"
	java -jar css-validator.jar --output=soap12 file:$cssfiles >> "$cssfiles".xml
done
