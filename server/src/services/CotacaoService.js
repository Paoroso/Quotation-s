module.exports = {
    cotarSeguro(productName, productPrice, paymentType) {
      let porcentagem = 0.08;
  
      if(paymentType <= 6){
        porcentagem = 0.05
      }
    
      return {
          productName: productName,
          productPrice: productPrice,
          valor_total_seguro: (productPrice * porcentagem).toFixed(2),
          paymentType: paymentType,
          portionPrice: ((productPrice * porcentagem)/paymentType).toFixed(2)
      }
    }
  }