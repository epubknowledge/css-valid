# !/bin/bash

## date: 20-11-05
## dev: codingChewie
## purpose: validates CSS files
## version: 1.0
## name: cssvalidate.sh

## set variables
CSS_DIR="${HOME}/convert/css_valid" ## Directory where CSS files will be placed to be tested
CSS_JAR="${HOME}/convert/_scripts/css_jar" ## Location for JAR files

echo "Running CSS Valid @ $(date '+%d/%m/%Y %H:%M:%S')"
check=(`find $CSS_DIR -maxdepth 1 -name "*.css" ! -name "epub3.css"`)

if [ ${#check[@]} -gt 0 ]; then
  for cssfiles in $(find "$CSS_DIR" -name "*.css" ! -name "epub3.css"); do
    [ ! -e "${cssfiles}.xml" ] || rm "${cssfiles}.xml"
    cd $CSS_DIR  
    java -jar ${CSS_JAR}/css-validator.jar --output=soap12 file:$cssfiles >> "$cssfiles".xml
  done
else 
    echo "CSS Files not found in directory"
fi
