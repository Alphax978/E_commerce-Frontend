<template>
  <div>
    <form @submit.prevent="makePayment">
      <label for="amount">Amount</label>
      <input type="text" id="amount" v-model="amount">
      <label for="purchase_order_id">Purchase Order ID</label>
      <input type="text" id="purchase_order_id" v-model="purchaseOrderID">
      <button type="submit">Pay</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: '',
      purchaseOrderID: '',
    }
  },
  methods: {
    async makePayment() {
    const payload = {
        return_url: 'https://example.com/payment',
        website_url: 'https://example.com/',
        amount: this.amount,
        purchase_order_id: this.purchaseOrderID,
        purchase_order_name: 'Test',
        customer_info: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '9801234567'
        },
        amount_breakdown: [
            {
                label: 'Amount',
                amount: this.amount
            }
        ],
        product_details: [
            {
                identity: '1234567890',
                name: 'Test',
                total_price: this.amount,
                quantity: 1,
                unit_price: this.amount
            }
        ]
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(payload),
        mode: 'no-cors',
        headers: 
        {
            'Authorization': `Key test_secret_key_07b9ecb340cc4196933a9400422c3b56`,
            'Content-Type': 'application/json',

        },
        credentials: 'omit',
        referrerPolicy: 'no-referrer',
    };

    try 
    {
        const response = await fetch('https://a.khalti.com/api/v2/epayment/initiate/', options);
        const data = await response.json();
        window.location.href = data.payment_url;
    } 
    catch (error) 
    {
        console.error(error);
    }
  
  
  

    }


  }
}
</script>
