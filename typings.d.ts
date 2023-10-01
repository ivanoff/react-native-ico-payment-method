declare module 'react-native-ico-payment-method' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

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

    type backgroundType = 'circle' | 'rect' | 'button';

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
