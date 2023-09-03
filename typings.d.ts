declare module 'react-native-ico-payment-method' {
    import { ReactNode } from 'react';

    type iconNames = 'worldpay' |
      'wirecard' |
      'western-union-2' |
      'western-union-1' |
      'western-union' |
      'wepay' |
      'visa' |
      'unionpay' |
      'switch' |
      'standard-chartered' |
      'spotify' |
      'shopify' |
      'sage' |
      'postepay' |
      'picknplay' |
      'paypoint' |
      'paypal-2' |
      'paypal-1' |
      'paypal' |
      'o' |
      'moneygram' |
      'mastercard-2' |
      'mastercard-1' |
      'mastercard' |
      'jcb' |
      'ideal' |
      'hsbc' |
      'google-wallet' |
      'generali' |
      'eway' |
      'eventbrite' |
      'ebay' |
      'e' |
      'discover' |
      'direct-debit' |
      'diners-club' |
      'clickbank' |
      'citi' |
      'cirrus' |
      'bluepay' |
      'bitcoin' |
      'bbb-1' |
      'bbb' |
      'authorize' |
      'american-express' |
      'amazon' |
      '2co';

    interface IconProps {
      name: iconNames;
      color: string;
      size: number;
    }

    const Icon: (props: IconProps) => ReactNode;

    export { iconNames };
    export default Icon;
}

