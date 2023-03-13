const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) =>  {

    if( phase === PHASE_DEVELOPMENT_SERVER ){

        // geliştirme aşamasında olup olmadığmızı kontrol edip ona uygun verileri döndürüyoruz.
        return{
            env:{
                mongodb_username: 'ali',
                mongodb_password: 'DBboB2dV1BXcuX1z',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'my-blog-dev' //farkı bir isim kullandık
            }
        }
    }
    
    return{
        env:{
            mongodb_username: 'ali',
            mongodb_password: 'DBboB2dV1BXcuX1z',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-blog'
        }
    }
}