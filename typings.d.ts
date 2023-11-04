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

    type iconColors = '#003F66' |
      '#004760' |
      '#004A97' |
      '#004F96' |
      '#005595' |
      '#005E88' |
      '#0063A6' |
      '#0068A8' |
      '#006AC9' |
      '#0073AA' |
      '#0078C1' |
      '#007A4E' |
      '#008061' |
      '#0086D1' |
      '#008FBE' |
      '#009DA5' |
      '#009DDD' |
      '#00A051' |
      '#02324F' |
      '#023563' |
      '#02375E' |
      '#027DBA' |
      '#0284CC' |
      '#02CCCC' |
      '#0356A2' |
      '#0466B5' |
      '#0468B2' |
      '#0472A3' |
      '#051244' |
      '#055093' |
      '#055D77' |
      '#0571C1' |
      '#0594CC' |
      '#05AFD6' |
      '#05C6E5' |
      '#06435E' |
      '#064C91' |
      '#06BA5B' |
      '#07A8EF' |
      '#07A9E2' |
      '#086D5E' |
      '#0872B9' |
      '#0A0E49' |
      '#0AD9EF' |
      '#0B9632' |
      '#0BAD82' |
      '#0C4875' |
      '#0CB2ED' |
      '#0D769B' |
      '#0D7DBC' |
      '#0F51B2' |
      '#0F549D' |
      '#111516' |
      '#1174CE' |
      '#12A9CC' |
      '#1398E2' |
      '#139AD6' |
      '#146643' |
      '#1476C6' |
      '#14A0EF' |
      '#1992DD' |
      '#1A5B80' |
      '#1A80AD' |
      '#1B7EC1' |
      '#1BCC38' |
      '#1EAA4B' |
      '#1F4789' |
      '#203D74' |
      '#21789E' |
      '#2273AA' |
      '#228FE0' |
      '#231F20' |
      '#232C65' |
      '#2574A5' |
      '#263B80' |
      '#293688' |
      '#298AD3' |
      '#2A4DAD' |
      '#2FABF7' |
      '#303847' |
      '#3042C6' |
      '#32357F' |
      '#329947' |
      '#32A6CE' |
      '#33E2FF' |
      '#3466B7' |
      '#366FC1' |
      '#3B3D3F' |
      '#3C58BF' |
      '#3F6FBC' |
      '#43567E' |
      '#436BC4' |
      '#44423E' |
      '#474744' |
      '#47AE33' |
      '#48C92D' |
      '#494949' |
      '#4A9E19' |
      '#4D4E4E' |
      '#4D5151' |
      '#4D5655' |
      '#505F7C' |
      '#545E60' |
      '#5877AF' |
      '#595A5B' |
      '#605E5F' |
      '#636363' |
      '#636C84' |
      '#63A4D6' |
      '#65B1E2' |
      '#666666' |
      '#686865' |
      '#686969' |
      '#6BB745' |
      '#6E7A8E' |
      '#720A1E' |
      '#7D849E' |
      '#843139' |
      '#85DD52' |
      '#877168' |
      '#878787' |
      '#8AB586' |
      '#8BB43F' |
      '#8C0909' |
      '#9A847A' |
      '#9A9FB8' |
      '#A0D1EA' |
      '#A23C42' |
      '#A2CE9F' |
      '#A5002F' |
      '#AA1A1A' |
      '#AF0C4B' |
      '#B0B5C6' |
      '#B2001E' |
      '#B41F36' |
      '#B4E52C' |
      '#B50662' |
      '#B79C91' |
      '#BA6D71' |
      '#BC202A' |
      '#C42A27' |
      '#C5D6D5' |
      '#C60C1E' |
      '#CB2026' |
      '#CBE4EF' |
      '#CC0224' |
      '#CC1B69' |
      '#CE495C' |
      '#D0D1D1' |
      '#D1094B' |
      '#D19EA0' |
      '#D29EA1' |
      '#D3000B' |
      '#D32259' |
      '#D60F05' |
      '#D85107' |
      '#DAEAE7' |
      '#DB1414' |
      '#DCE5E5' |
      '#DEBBBC' |
      '#E05A00' |
      '#E0E0E0' |
      '#E20E37' |
      '#E26600' |
      '#E52836' |
      '#E8213E' |
      '#E84E0A' |
      '#E86E00' |
      '#E92F30' |
      '#EA2227' |
      '#EA2230' |
      '#EB1C2E' |
      '#ED114C' |
      '#ED1C2E' |
      '#ED6C0C' |
      '#ED7C00' |
      '#EE3725' |
      '#EE3B3F' |
      '#EF9122' |
      '#F16823' |
      '#F26E21' |
      '#F3F2F2' |
      '#F42588' |
      '#F44500' |
      '#F48D1C' |
      '#F4C82E' |
      '#F6921E' |
      '#F7142F' |
      '#F72F2F' |
      '#F7981D' |
      '#F7AB1B' |
      '#F7AE0D' |
      '#F93283' |
      '#F98E19' |
      '#FBBF16' |
      '#FF2957' |
      '#FF3E48' |
      '#FF4382' |
      '#FF5050' |
      '#FF5500' |
      '#FF6700' |
      '#FF6C6C' |
      '#FF7900' |
      '#FF7F29' |
      '#FF8500' |
      '#FF9100' |
      '#FFA300' |
      '#FFA515' |
      '#FFB600' |
      '#FFBC00' |
      '#FFC715' |
      '#FFCE00' |
      '#FFDD12' |
      '#FFF315' |
      '#FFFFFF';

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

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
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
