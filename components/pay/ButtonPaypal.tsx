import { FC, useContext, useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { shiftResponseAll } from '../../Interfaces/users'
import { ServiceContext } from '../../context/services'
import { ReceiptContext } from '../../context/receipts'

interface Props {
    shiftFind:shiftResponseAll[]
}

const ButtonPaypal:FC<Props> = ({shiftFind}) => {

 
  



  const { putService} = useContext(ServiceContext)
  const {addReceipt} = useContext(ReceiptContext)

  const [paidFor, setPaidFor] = useState(false)
  const [error, setError] = useState<Record<string, unknown> | string | null>(null)
  

  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleApprove = (_orderId:string) => {
    setPaidFor(true)
  }

  console.log(paidFor)

  if (paidFor) {
      addReceipt(shiftFind[0]?.titulo,shiftFind[0]?.fechayhora, shiftFind[0]?.linksesion, shiftFind[0]?.precio,"APROBADO",shiftFind[0]?.moneda, shiftFind[0]?.usuario)
      alert('Gracias por su compra revise su email')
      putService(shiftFind[0]?.titulo,shiftFind[0]?.img, shiftFind[0]?.fechayhora, shiftFind[0]?.linksesion,shiftFind[0]?.precio, "APROBADO", shiftFind[0]?.moneda, shiftFind[0]?.usuario, shiftFind[0]?._id)
      location.replace('/PsychologySessions')
   
  }




  if (error) {
    alert(error)
  }

  return (
   <PayPalScriptProvider options={{
    "clientId":import.meta.env.VITE_PAYMENT_CLIENT_ID
  }}>
    <PayPalButtons
    onClick={(_data,actions)=>{
      const hasAlreadyBoughtCourse = false 
      if (hasAlreadyBoughtCourse){
        setError('Ya has comprado el curso')
        return actions.reject();
      } else {
        return actions.resolve()
      }
    }}
    createOrder={(_data, actions)=>{
      return actions.order.create({
        purchase_units: [
          {
            description: shiftFind[0]?.titulo,
            amount: {
              currency_code: 'USD',
              value: shiftFind[0]?.precio
            },
          },
        ],
        intent: 'CAPTURE'
      });
    }}
    onApprove={async (data,action)=>{
      const order = await action.order?.capture()
      console.log("order", order)
      handleApprove(data.orderID)
    }}
    onCancel={()=>{}}
    onError={(err)=>{
      setError(err)
      console.log("Error al pagar", err)
    }}
    />
   </PayPalScriptProvider>
  )
}

export default ButtonPaypal