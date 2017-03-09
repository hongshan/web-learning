from setuptools import find_packages, setup

setup(
	name="sme_server",
	version="0.0.1",
	packages=find_packages(),
    entry_points={
        'console_scripts': [
            'sme=sme_server:run',
        ],
    },
    include_package_data=True

)

