<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col">
            </div>
            <div class="col">
                <div class="container-fluid text-right">
                    <img src="https://i.ibb.co/tBsCcYD/sidedev.png" alt="sidedev" border="0">
                </div>   
            </div>
            <div class="col">
            </div>
        </div>
        <!--iamgenes y texto-->
        <div class="row">
          <div class="col ">
            <a><img class='custom-rounded' src="https://i.ibb.co/b17FRsD/technology-4256272-1920.jpg" alt="technology-4256272-1920" border="0"></a>
          </div>
          <div class="col texto-publicitario">
            Si tu empresa necesita un servicio o requiere de una transformación tecnologica para entregar servicios a los demás, QuickDev es tu solución, esta plataforma de transformación funciona como intermediaria entre especialistas y clientes de cualquier rubro.
          </div>
        </div>
        <div class="row">
          <div class="col texto-publicitario">
            
            <p>
              <br>Llega a un acuerdo con tu cliente/especialista. 
              <br>Publica o postula a trabajos.
              <br>Consigue el trabajo o alguien para que lo realice. 
            </p>


          </div>
          <div class="col">
            <a><img class='custom-rounded ' src="https://i.ibb.co/v1J6N9n/pexels-sora-shimazaki-5668859.jpg" alt="pexels-sora-shimazaki-5668859" border="0"></a>
          </div>


        </div>

        <div class="row">
          <div class="col">
            <a><img  class='custom-rounded' src="https://i.ibb.co/XCm0ztT/pexels-andrea-piacquadio-3790805.jpg" alt="pexels-andrea-piacquadio-3790805" border="0"></a>
          </div>
          <div class="col texto-publicitario">
            Así podrás conseguir los servicios que necesites como cliente o bien encontrar trabajos adecuados a tus conocimientos como especialista.
          </div>


        </div>
        <div class = "container bottom text-center">
          <div class="col-sm button ">
              <a class="btn btn-default color2 rounded-pill " href="/registrar" role="button">Registrarse</a>
          </div>
        </div>

    </div>
</template>

<script>
export default {
  created() {
    if (localStorage.getItem('token') === null) {
        console.log('hola')
    }else{
        this.$router.push('/home');
    }
  },
}
</script>
<style>
  body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  }
  body {
    background: linear-gradient(180deg, #736CED -7.87%, rgba(255, 255, 255, 0) 20%),
                linear-gradient(0deg, #736CED -12.07%, rgba(255, 255, 255, 0) 20%),
                #FEF9FF  url("https://i.ibb.co/ckdTnTC/patron.png") ;;
  }
  .custom-rounded{
    width: 472px;
    height: 290px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 94px;
  }



</style>