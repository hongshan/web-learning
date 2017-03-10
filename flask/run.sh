source .tox/test/Scripts/activate
rm -rf .tox/test/Lib/site-packages/sme_server
cp -R sme_server .tox/test/Lib/site-packages/sme_server
sme
