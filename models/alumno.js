
// Create new alumno in your database and return its id
exports.create = function(user, text, cb) {
  }
  
  // Get a particular alumno
  exports.getByLegajo = function(legajo) {
    
    var sql = require("mssql");
    
    // config for your database
    var config = {
        server: '192.0.2.240',
        driver: 'msnodesqlv8',
        user:'gchervet',
        domain:'KENNEDY',
        database:'prod_uni',
        password:'741852852',
        connectionString: 'Driver=msnodesqlv8;Server=192.0.2.240;Database=prod_uni;Trusted_Connection=yes;Integrated_Security=yes',
        port: 1433
    };

    sql.connect(config).then(() => {
        return sql.query`select * from uniAlumnos where legdef = ${legajo}`;
    })
    .then( function(recordset) {
        sql.close();
        return recordset['recordset'];
     })
    .catch( function(err) {
        sql.close();
        throw err; // it can be done so that you can handle the errors in myRouter
     });
    
    
    // .then(result => {
    //     sql.close();
    //     return result.recordset;
    // }).catch(err => {
    //     console.dir('erorrr');
    //     sql.close(); 
    //     return;
    // })

  }
  
  // Get all alumnos
  exports.all = function(cb) {
    cb(null, [])
  }
  
  // Get all alumnos by a particular user
  exports.allByUser = function(user, cb) {
    cb(null, [])
  }