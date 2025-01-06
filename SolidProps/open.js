class PaymentProcessor {
    process(payment) {
      payment.pay();
    }
  }
  
  class CreditCardPayment {
    pay() {
      console.log('Processing credit card payment');
    }
  }
  
  class PayPalPayment {
    pay() {
      console.log('Processing PayPal payment');
    }
  }
  

  const processor = new PaymentProcessor();
  processor.process(new CreditCardPayment());
  processor.process(new PayPalPayment());
  