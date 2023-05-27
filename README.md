## Project Setup

To run the project on your local system, follow these steps and run these commands : <br />

-   create a database on your local system
-   run this command in your project root directory :
    -   npm i
    -   execute these queries on your postgres database: <br />
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        CREATE EXTENSION postgis;

Also you have to set .env configurations : <br />

-   &nbsp;&nbsp;&nbsp;&nbsp;PORT :<br />
    &nbsp;&nbsp;&nbsp;&nbsp;PGUSER :<br />
    &nbsp;&nbsp;&nbsp;&nbsp;PGHOST :<br />
    &nbsp;&nbsp;&nbsp;&nbsp;PGPASSWORD :<br />
    &nbsp;&nbsp;&nbsp;&nbsp;PGDATABASE :<br />
    &nbsp;&nbsp;&nbsp;&nbsp;PGPORT :<br />
    &nbsp;&nbsp;&nbsp;&nbsp;JWT_ACCESS_SECRET=6247XYTG4DQS208 <br />
    &nbsp;&nbsp;&nbsp;&nbsp;JWT_REFRESH_SECRET=254KLFLGFD00X1 <br />
    &nbsp;&nbsp;&nbsp;&nbsp;SUPER_ADMIN_EMAIL = tarek@deepVolt.io <br />
    &nbsp;&nbsp;&nbsp;&nbsp;SUPER_ADMIN_PWD = ghjklmaze <br />
    &nbsp;&nbsp;&nbsp;&nbsp;ADMIN_EMAIL = karem@deepVolt.io <br />
    &nbsp;&nbsp;&nbsp;&nbsp;ADMIN_PWD = mlpoaze1<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<br />

then run this command : <br />

-   npx sequelize-cli init
-   npx sequelize-cli db:migrate <br />
-   npx sequelize-cli db:seed:all <br />

Finally <br/>

-   npm start <br />

********************************** <br />
VM configuration(AWS) : <br />
- First you need to get postgres(version 15 or higher) installed on your machine. <br />

- then give permissions to access your ec2-instance directories by typing these cmds:<br />
- sudo chown -R postgres:postgres /home/ec2-user/<br />
- sudo chmod -R 755 /home/ec2-user/<br />

- make postgres accessible by external machines(gAdmin)<br />
- sudo nano /link/to/pg_hba.conf  //path like this : "/var/lib/pgsql/data/pg_hba.conf" <br />
host    all             all             0.0.0.0/0          md5<br />

- Then, you need to install postgis(version 3 or higher) on your machine(install it from source).<br />
- Type this command in your terminal "ldd /usr/lib64/pgsql/postgis-3.so" to see what are the dependencies of postgis.<br />
- Generally required dependecies are GEOS, PROJ, postgres, gcc(c/c++ compier).<br />
- sudo yum install -y gcc gcc-c++ make automake autoconf libtool pkgconfig json-c-devel protobuf-c-devel libxml2-devel<br />

- then you need to install geos(v3.9.0) from source by these cmds:<br />
    - wget http://download.osgeo.org/geos/geos-3.9.0.tar.bz2<br />
    - tar xjf geos-3.9.0.tar.bz2<br />
    - cd geos-3.9.0<br />
    - ./configure --prefix=/usr/local/geos-3.9.0<br />
    - make<br />
    - sudo make install <br />
    - sudo ldconfig<br />
    - export LD_LIBRARY_PATH=path-to-lib-file-in-geos-dir:$LD_LIBRARY_PATH<br />

- now we need to install PROJ by typing these cmds:<br />
    - wget https://download.osgeo.org/proj/proj-4.9.3.tar.gz<br />
    - tar xf proj-4.9.3.tar.gz<br />
    - cd proj-4.9.3<br />
    - ./configure --prefix=/usr/local/proj-4.9.3<br />
    - make<br />
    - sudo make install<br />
    - export LD_LIBRARY_PATH=path-to-lib-file-in-proj-dir:$LD_LIBRARY_PATH<br />

- steps to install postgis from source : <br />
- Inside terminal of you VM type these cmds:<br />
    - mkdir postgis3<br />
    - cd postgis3<br />
    - wget https://download.osgeo.org/postgis/source/postgis-3.2.5.tar.gz<br />
    - tar xvfz postgis-3.2.5.tar.gz<br />
    - cd postgis-3.2.5<br />
    -./configure --with-pgconfig=/usr/bin/pg_config --with-geosconfig=/home/ec2-user/postgis3/geos-3.9.0/tools/geos-config<br />
    - make<br />
    - sudo make install<br />
    - enter psql mode and type this cmd : CREATE POSTGIS extension;<br />

    - if you get an error that tells you install PROJ or geos and you already installed them, type these cmds : <br />
        - sudo nano /etc/ld.so.conf<br />
        - add proj path to conf file by typing this cmd: <br />
        /home/ec2-user/postgis3/proj-4.9.3/src/.libs
        - add geos path to conf file by typing this cmd: <br />
        /home/ec2-user/postgis3/proj-4.9.3/src/.libs
        - type this to terminal: sudo ldconfig
