import React, { Component } from "react";
import "./create.css";

class Create extends Component {
  accounts = [
    {
      value: 300000398463509,
      label:
        "Bank of Montreal, Hong Kong Branch (HONG KONG, HK) - 2001750521 - 300000398463509",
      name: "Bank of Montreal, Hong Kong Branch (HONG KONG, HK) - 2001750521",
      number: "139543",
      country: "HK"
    },
    {
      value: 300000398520513,
      label: "埃森哲 (北京市, CN) - 300000398520513",
      name: "埃森哲 (北京市, CN)",
      number: "140018",
      country: "CN"
    },
    {
      value: 300000398530634,
      label: "EFG EUROBANK ERGASIAS S.A. (ΑΘΉΝΑ, GR) - 300000398530634",
      name: "EFG EUROBANK ERGASIAS S.A. (ΑΘΉΝΑ, GR)",
      number: "400682",
      country: "GR"
    },
    {
      value: 300000404829376,
      label: "Allan Gray Limited (FORESHORE, ZA) - 300000404829376",
      name: "Allan Gray Limited (FORESHORE, ZA)",
      number: "444373",
      country: "ZA"
    },
    {
      value: 300000440477222,
      label: "BBVA (MADRID, ES) - 300000440477222",
      name: "BBVA (MADRID, ES)",
      number: "537485",
      country: "ES"
    },
    {
      value: 300000440471468,
      label: "BRADESCO New York Branch (New York, US) - 300000440471468",
      name: "BRADESCO New York Branch (New York, US)",
      number: "537490",
      country: "US"
    },
    {
      value: 300000440892146,
      label: "novacaixagalicia (GENEVE, CH) - 300000440892146",
      name: "novacaixagalicia (GENEVE, CH)",
      number: "538157",
      country: "CH"
    },
    {
      value: 300000504204113,
      label: "Scoban Plc (EDINBURGH, GB) - 300000504204113",
      name: "Scoban Plc (EDINBURGH, GB)",
      number: "810712",
      country: "GB"
    },
    {
      value: 300000522100918,
      label:
        "方正国际软件（北京）有限公司 (北京市, CN) - 1331150107 - 300000522100918",
      name: "方正国际软件（北京）有限公司 (北京市, CN) - 1331150107",
      number: "812051",
      country: "CN"
    },
    {
      value: 300000586913533,
      label:
        "PT. Metrocom Global Solusi (JAKARTA SELATAN, ID) - 300000586913533",
      name: "PT. Metrocom Global Solusi (JAKARTA SELATAN, ID)",
      number: "860042",
      country: "ID"
    },
    {
      value: 300000431231922,
      label:
        "Oracle Financial Services Software Pte. Ltd. (NORTH RYDE, AU) - 300000431231922",
      name: "Oracle Financial Services Software Pte. Ltd. (NORTH RYDE, AU)",
      number: "536718",
      country: "AU"
    },
    {
      value: 300000588977423,
      label: "Sharjah Islamic Bank (SHARJAH, AE) - 300000588977423",
      name: "Sharjah Islamic Bank (SHARJAH, AE)",
      number: "860100",
      country: "AE"
    },
    {
      value: 300000610312218,
      label: "Hyundai Card Co Ltd (영등포구, KR) - 300000610312218",
      name: "Hyundai Card Co Ltd (영등포구, KR)",
      number: "865579",
      country: "KR"
    },
    {
      value: 300000588977409,
      label: "ROMSYS S.R.L (BUCUREŞTI, RO) - 300000588977409",
      name: "ROMSYS S.R.L (BUCUREŞTI, RO)",
      number: "860099",
      country: "RO"
    },
    {
      value: 300000588791221,
      label: "National Societe Generale Bank (CAIRO, EG) - 300000588791221",
      name: "National Societe Generale Bank (CAIRO, EG)",
      number: "860073",
      country: "EG"
    },
    {
      value: 300000588977507,
      label: " 江苏常熟农村商业银行股份有限公司 (常熟市, CN) - 300000588977507",
      name: " 江苏常熟农村商业银行股份有限公司 (常熟市, CN)",
      number: "860106",
      country: "CN"
    },
    {
      value: 300000610312175,
      label:
        "National Societe Generale Bank (CAIRO, EG) - -155198954 - 300000610312175",
      name: "National Societe Generale Bank (CAIRO, EG) - -155198954",
      number: "865577",
      country: "EG"
    },
    {
      value: 300000440445049,
      label: "United Bank Ltd (KARACHI CITY, PK) - 300000440445049",
      name: "United Bank Ltd (KARACHI CITY, PK)",
      number: "537420",
      country: "PK"
    },
    {
      value: 300000610312160,
      label: "Hyundai Capital Services Inc (Raleigh, US) - 300000610312160",
      name: "Hyundai Capital Services Inc (Raleigh, US)",
      number: "865576",
      country: "US"
    },
    {
      value: 300000632647541,
      label: "Premier Systems (Pvt) Limited (Kabul, AF) - 300000632647541",
      name: "Premier Systems (Pvt) Limited (Kabul, AF)",
      number: "867748",
      country: "AF"
    },
    {
      value: 300000588791251,
      label: "S.C. Volksbank Romania S.A (BUCUREŞTI, RO) - 300000588791251",
      name: "S.C. Volksbank Romania S.A (BUCUREŞTI, RO)",
      number: "860074",
      country: "RO"
    },
    {
      value: 300000588977493,
      label: "泉州银行 (泉州市, CN) - 300000588977493",
      name: "泉州银行 (泉州市, CN)",
      number: "860105",
      country: "CN"
    },
    {
      value: 300000586913412,
      label: "BANK OF JORDAN (AMMAN, JO) - 941996771 - 300000586913412",
      name: "BANK OF JORDAN (AMMAN, JO) - 941996771",
      number: "859682",
      country: "JO"
    },
    {
      value: 300000586913444,
      label: "Oracle de Venezuela S.R.L. (CARACAS, VE) - 300000586913444",
      name: "Oracle de Venezuela S.R.L. (CARACAS, VE)",
      number: "859683",
      country: "VE"
    },
    {
      value: 300000397769880,
      label:
        "PT Sigma Solusi Integrasi (JAKARTA SELATAN, ID) - 300000397769880",
      name: "PT Sigma Solusi Integrasi (JAKARTA SELATAN, ID)",
      number: "138649",
      country: "ID"
    }
  ];
  opportunities = [
    {
      value: 300003655844643,
      label: "9003 - Z_ADIT_MEGHARAO",
      name: "Z_ADIT_MEGHARAO",
      number: "9003",
      account: {
        id: 300000729251791,
        name: "Baiduri Bank Berhad (Bandar Seri Begawan, BN)",
        number: "876508"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 300003726592643,
      label: "11003 - Z_ADIT_MEGHRAO_20190130",
      name: "Z_ADIT_MEGHRAO_20190130",
      number: "11003",
      account: {
        id: 100000693904200,
        name: "Monash University (Monash University, AU)",
        number: "1260243"
      },
      salesStage: "6. Close"
    },
    {
      value: 100004504311769,
      label: "9NBKV - CA/ Amundi",
      name: "CA/ Amundi",
      number: "9NBKV",
      account: {
        id: 100000811366679,
        name: "CREDIT AGRICOLE ASSET MANAGEMENT (PARIS, FR)",
        number: "3730485"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504304741,
      label: "9KKGN - CME HCM",
      name: "CME HCM",
      number: "9KKGN",
      account: {
        id: 100004317437110,
        name: "CME Media Services Limited, organizacni slozka (PRAHA, CZ)",
        number: "13292585"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504306596,
      label: "B53XL - L'OREAL",
      name: "L'OREAL",
      number: "B53XL",
      account: {
        id: 100000811311637,
        name: "LOreal Produits de Luxe International",
        number: "3710915"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504313181,
      label:
        "9MZS3 - N-ID-OD-PT Bank Tabungan Pensiunan Nasional-OSSI-PP-332444",
      name: "N-ID-OD-PT Bank Tabungan Pensiunan Nasional-OSSI-PP-332444",
      number: "9MZS3",
      account: {
        id: 100000810802019,
        name: "PT Bank Tabungan Pensiunan Nasional (BANDUNG, ID)",
        number: "3613037"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504313119,
      label: "9N8VD - OD_CPS_LOTT_FY19",
      name: "OD_CPS_LOTT_FY19",
      number: "9N8VD",
      account: {
        id: 100000693905219,
        name: "Cox Corporate Services, Inc.",
        number: "1261262"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504285304,
      label:
        "9JRDZ - Saas: Villery & Boch - SCM Planning - CPQ - Service Cloud",
      name: "Saas: Villery & Boch - SCM Planning - CPQ - Service Cloud",
      number: "9JRDZ",
      account: {
        id: 100000809841082,
        name: "Villeroy & Boch AG",
        number: "3418545"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504313713,
      label: "9NG9P - SCM Etapa 2 en Renova",
      name: "SCM Etapa 2 en Renova",
      number: "9NG9P",
      account: {
        id: 100004326221045,
        name: "Renova S.A. (SAN ISIDRO, AR)",
        number: "13515513"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504309468,
      label: "9MFTZ - FY19/APPS/EPM/MCMC Financial Budgeting",
      name: "FY19/APPS/EPM/MCMC Financial Budgeting",
      number: "9MFTZ",
      account: {
        id: 100000810523756,
        name: "Suruhanjaya Komunikasi dan Multimedia Malaysia",
        number: "3571682"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504311509,
      label: "9N99D - DC Setup",
      name: "DC Setup",
      number: "9N99D",
      account: { id: 100000811003517, name: "C-Dot", number: "3654653" },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504285595,
      label: "B4ZRZ - NTTA_License Project_ AT/GF",
      name: "NTTA_License Project_ AT/GF",
      number: "B4ZRZ",
      account: {
        id: 100000812130305,
        name: "NTT America, Inc.",
        number: "3863594"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504313184,
      label: "9N8BK - Vision 7 - Tax Reporting",
      name: "Vision 7 - Tax Reporting",
      number: "9N8BK",
      account: {
        id: 100000812284003,
        name: "Vision 7 International Inc",
        number: "3912107"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504324157,
      label: "5DJ72 - OD_Exa_PPG",
      name: "OD_Exa_PPG",
      number: "5DJ72",
      account: {
        id: 100004315725840,
        name: "PPG Glass Group (PITTSBURGH, US)",
        number: "13245502"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504315198,
      label: "9JWGY - Summit资金管理项目",
      name: "Summit资金管理项目",
      number: "9JWGY",
      account: {
        id: 100000810212206,
        name: "交通银行股份有限公司 (上海市, CN)",
        number: "3506127"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504285629,
      label: "9JJMZ - N-FR-DGFIP_annual",
      name: "N-FR-DGFIP_annual",
      number: "9JJMZ",
      account: { id: 100000809600671, name: "DGFIP", number: "3394854" },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504309541,
      label: "9WWX6 - JP_NSCS_JDEadditional",
      name: "JP_NSCS_JDEadditional",
      number: "9WWX6",
      account: {
        id: 100000815494119,
        name: "株式会社ニレコ",
        number: "4532241"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504310107,
      label: "9MDQ6 - NGV-PE-MiBanco Servicios Proy IFSR9",
      name: "NGV-PE-MiBanco Servicios Proy IFSR9",
      number: "9MDQ6",
      account: {
        id: 100004320544354,
        name: "Mibanco - Banco de la Micro Empresa S.A. (Lima, PE)",
        number: "13375477"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004504312685,
      label: "9N6WM - Indian Coast Gurad",
      name: "Indian Coast Gurad",
      number: "9N6WM",
      account: {
        id: 100000809841239,
        name: "Indian Coast Guard",
        number: "3418698"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004317199639,
      label: "9RB2B - ELQ-nic-IN",
      name: "ELQ-nic-IN",
      number: "9RB2B",
      account: {
        id: 100004235544078,
        name: "nic (BENGALURU, IN)",
        number: "12665190"
      },
      salesStage: "1. Assessment & Qualification"
    },
    {
      value: 100004317199646,
      label: "9RB7B - HF 10 NUP DBSE2 Techdata Godrej",
      name: "HF 10 NUP DBSE2 Techdata Godrej",
      number: "9RB7B",
      account: {
        id: 300003425082297,
        name: "HINDUSTAN FOODS LIMITED (Coimbatore, IN)",
        number: "12517173"
      },
      salesStage: "6. Close"
    },
    {
      value: 100004317199648,
      label: "9V3SR - ELQ-Stockholding Document Management Services Limited-IN",
      name: "ELQ-Stockholding Document Management Services Limited-IN",
      number: "9V3SR",
      account: {
        id: 100000809973374,
        name: "Stock Holding Corporation Of India Limited",
        number: "3462326"
      },
      salesStage: "6. Close"
    },
    {
      value: 100004317199645,
      label: "9MGND - JP_Gunma_Police_NEC",
      name: "JP_Gunma_Police_NEC",
      number: "9MGND",
      account: {
        id: 100000810555137,
        name: "群馬県警察本部",
        number: "3587942"
      },
      salesStage: "6. Close"
    },
    {
      value: 100004317199647,
      label: "9QMWL - R Strategic Global_N",
      name: "R Strategic Global_N",
      number: "9QMWL",
      account: {
        id: 100004235544074,
        name: "R Strategic Global (BHOPAL, IN)",
        number: "12665189"
      },
      salesStage: "6. Close"
    },
    {
      value: 100004504504405,
      label: "9TD7T - CAG - Service Cloud for CTS",
      name: "CAG - Service Cloud for CTS",
      number: "9TD7T",
      account: {
        id: 100000693796877,
        name: "CHANGI AIRPORT GROUP (SINGAPORE) PTE. LTD.",
        number: "1249068"
      },
      salesStage: "1. Assessment & Qualification"
    }
  ];
  countries = [
    { label: "Afghanistan", value: "AF" },
    { label: "Aland Islands", value: "AX" },
    { label: "Albania", value: "AL" },
    { label: "Algeria", value: "DZ" },
    { label: "American Samoa", value: "AS" },
    { label: "Andorra", value: "AD" },
    { label: "Angola", value: "AO" },
    { label: "Anguilla", value: "AI" },
    { label: "Antarctica", value: "AQ" },
    { label: "Antigua and Barbuda", value: "AG" },
    { label: "Argentina", value: "AR" },
    { label: "Armenia", value: "AM" },
    { label: "Aruba", value: "AW" },
    { label: "Australia", value: "AU" },
    { label: "Austria", value: "AT" },
    { label: "Azerbaijan", value: "AZ" },
    { label: "Bahamas", value: "BS" },
    { label: "Bahrain", value: "BH" },
    { label: "Bangladesh", value: "BD" },
    { label: "Barbados", value: "BB" },
    { label: "Belarus", value: "BY" },
    { label: "Belgium", value: "BE" },
    { label: "Belize", value: "BZ" },
    { label: "Benin", value: "BJ" },
    { label: "Bermuda", value: "BM" },
    { label: "Bhutan", value: "BT" },
    { label: "Bolivia", value: "BO" },
    { label: "Bosnia and Herzegovina", value: "BA" },
    { label: "Botswana", value: "BW" },
    { label: "Bouvet Island", value: "BV" },
    { label: "Brazil", value: "BR" },
    { label: "British Indian Ocean Territory", value: "IO" },
    { label: "Brunei Darussalam", value: "BN" },
    { label: "Bulgaria", value: "BG" },
    { label: "Burkina Faso", value: "BF" },
    { label: "Burundi", value: "BI" },
    { label: "Cabo Verde", value: "CV" },
    { label: "Cambodia", value: "KH" },
    { label: "Cameroon", value: "CM" },
    { label: "Canada", value: "CA" },
    { label: "Cayman Islands", value: "KY" },
    { label: "Central African Republic", value: "CF" },
    { label: "Chad", value: "TD" },
    { label: "Chile", value: "CL" },
    { label: "China", value: "CN" },
    { label: "Christmas Island", value: "CX" },
    { label: "Cocos (Keeling) Islands", value: "CC" },
    { label: "Colombia", value: "CO" },
    { label: "Comoros", value: "KM" },
    { label: "Congo", value: "CG" },
    { label: "Congo, The Democratic Republic of the", value: "CD" },
    { label: "Cook Islands", value: "CK" },
    { label: "Costa Rica", value: "CR" },
    { label: "Cote d'Ivoire", value: "CI" },
    { label: "Croatia", value: "HR" },
    { label: "Cyprus", value: "CY" },
    { label: "Czech Republic", value: "CZ" },
    { label: "Denmark", value: "DK" },
    { label: "Djibouti", value: "DJ" },
    { label: "Dominica", value: "DM" },
    { label: "Dominican Republic", value: "DO" },
    { label: "Ecuador", value: "EC" },
    { label: "Egypt", value: "EG" },
    { label: "El Salvador", value: "SV" },
    { label: "Equatorial Guinea", value: "GQ" },
    { label: "Eritrea", value: "ER" },
    { label: "Estonia", value: "EE" },
    { label: "Ethiopia", value: "ET" },
    { label: "Falkland Islands (Malvinas)", value: "FK" },
    { label: "Faroe Islands", value: "FO" },
    { label: "Fiji", value: "FJ" },
    { label: "Finland", value: "FI" },
    { label: "France", value: "FR" },
    { label: "French Guiana", value: "GF" },
    { label: "French Polynesia", value: "PF" },
    { label: "French Southern Territories", value: "TF" },
    { label: "Gabon", value: "GA" },
    { label: "Gambia", value: "GM" },
    { label: "Georgia", value: "GE" },
    { label: "Germany", value: "DE" },
    { label: "Ghana", value: "GH" },
    { label: "Gibraltar", value: "GI" },
    { label: "Greece", value: "GR" },
    { label: "Greenland", value: "GL" },
    { label: "Grenada", value: "GD" },
    { label: "Guadeloupe", value: "GP" },
    { label: "Guam", value: "GU" },
    { label: "Guatemala", value: "GT" },
    { label: "Guernsey", value: "GG" },
    { label: "Guinea", value: "GN" },
    { label: "Guinea-Bissau", value: "GW" },
    { label: "Guyana", value: "GY" },
    { label: "Haiti", value: "HT" },
    { label: "Heard Island and McDonald Islands", value: "HM" },
    { label: "Holy See (Vatican City State)", value: "VA" },
    { label: "Honduras", value: "HN" },
    { label: "Hong Kong", value: "HK" },
    { label: "Hungary", value: "HU" },
    { label: "Iceland", value: "IS" },
    { label: "India", value: "IN" },
    { label: "Indonesia", value: "ID" },
    { label: "Iran, Islamic Republic of", value: "IR" },
    { label: "Iraq", value: "IQ" },
    { label: "Ireland", value: "IE" },
    { label: "Isle of Man", value: "IM" },
    { label: "Israel", value: "IL" },
    { label: "Italy", value: "IT" },
    { label: "Jamaica", value: "JM" },
    { label: "Japan", value: "JP" },
    { label: "Jersey", value: "JE" },
    { label: "Jordan", value: "JO" },
    { label: "Kazakhstan", value: "KZ" },
    { label: "Kenya", value: "KE" },
    { label: "Kiribati", value: "KI" },
    { label: "Korea, Democratic People's Republic of", value: "KP" },
    { label: "Korea, Republic of", value: "KR" },
    { label: "Kosovo", value: "XK" },
    { label: "Kuwait", value: "KW" },
    { label: "Kyrgyzstan", value: "KG" },
    { label: "Lao People's Democratic Republic", value: "LA" },
    { label: "Latvia", value: "LV" },
    { label: "Lebanon", value: "LB" },
    { label: "Lesotho", value: "LS" },
    { label: "Liberia", value: "LR" },
    { label: "Libya", value: "LY" },
    { label: "Liechtenstein", value: "LI" },
    { label: "Lithuania", value: "LT" },
    { label: "Luxembourg", value: "LU" },
    { label: "Macao", value: "MO" },
    { label: "Macedonia, The Former Yugoslav Republic of", value: "MK" },
    { label: "Madagascar", value: "MG" },
    { label: "Malawi", value: "MW" },
    { label: "Malaysia", value: "MY" },
    { label: "Maldives", value: "MV" },
    { label: "Mali", value: "ML" },
    { label: "Malta", value: "MT" },
    { label: "Marshall Islands", value: "MH" },
    { label: "Martinique", value: "MQ" },
    { label: "Mauritania", value: "MR" },
    { label: "Mauritius", value: "MU" },
    { label: "Mayotte", value: "YT" },
    { label: "Mexico", value: "MX" },
    { label: "Micronesia, Federated States of", value: "FM" },
    { label: "Moldova", value: "MD" },
    { label: "Monaco", value: "MC" },
    { label: "Mongolia", value: "MN" },
    { label: "Montenegro", value: "ME" },
    { label: "Montserrat", value: "MS" },
    { label: "Morocco", value: "MA" },
    { label: "Mozambique", value: "MZ" },
    { label: "Myanmar", value: "MM" },
    { label: "Namibia", value: "NA" },
    { label: "Nauru", value: "NR" },
    { label: "Nepal", value: "NP" },
    { label: "Netherlands", value: "NL" },
    { label: "Netherlands Antilles", value: "AN" },
    { label: "New Caledonia", value: "NC" },
    { label: "New Zealand", value: "NZ" },
    { label: "Nicaragua", value: "NI" },
    { label: "Niger", value: "NE" },
    { label: "Nigeria", value: "NG" },
    { label: "Niue", value: "NU" },
    { label: "Norfolk Island", value: "NF" },
    { label: "Northern Mariana Islands", value: "MP" },
    { label: "Norway", value: "NO" },
    { label: "Oman", value: "OM" },
    { label: "Pakistan", value: "PK" },
    { label: "Palau", value: "PW" },
    { label: "Palestine, State of", value: "PS" },
    { label: "Panama", value: "PA" },
    { label: "Papua New Guinea", value: "PG" },
    { label: "Paraguay", value: "PY" },
    { label: "Peru", value: "PE" },
    { label: "Philippines", value: "PH" },
    { label: "Pitcairn", value: "PN" },
    { label: "Poland", value: "PL" },
    { label: "Portugal", value: "PT" },
    { label: "Puerto Rico", value: "PR" },
    { label: "Qatar", value: "QA" },
    { label: "Reunion", value: "RE" },
    { label: "Romania", value: "RO" },
    { label: "Russian Federation", value: "RU" },
    { label: "Rwanda", value: "RW" },
    { label: "Saint Helena, Ascension and Tristan da Cunha", value: "SH" },
    { label: "Saint Kitts and Nevis", value: "KN" },
    { label: "Saint Lucia", value: "LC" },
    { label: "Saint Vincent and the Grenadines", value: "VC" },
    { label: "Samoa", value: "WS" },
    { label: "San Marino", value: "SM" },
    { label: "Sao Tome and Principe", value: "ST" },
    { label: "Saudi Arabia", value: "SA" },
    { label: "Senegal", value: "SN" },
    { label: "Serbia", value: "RS" },
    { label: "Seychelles", value: "SC" },
    { label: "Sierra Leone", value: "SL" },
    { label: "Singapore", value: "SG" },
    { label: "Slovakia", value: "SK" },
    { label: "Slovenia", value: "SI" },
    { label: "Solomon Islands", value: "SB" },
    { label: "Somalia", value: "SO" },
    { label: "South Africa", value: "ZA" },
    { label: "South Georgia and the South Sandwich Islands", value: "GS" },
    { label: "South Sudan", value: "SS" },
    { label: "Spain", value: "ES" },
    { label: "Sri Lanka", value: "LK" },
    { label: "Sudan", value: "SD" },
    { label: "Suriname", value: "SR" },
    { label: "Svalbard and Jan Mayen", value: "SJ" },
    { label: "Swaziland", value: "SZ" },
    { label: "Sweden", value: "SE" },
    { label: "Switzerland", value: "CH" },
    { label: "Syrian Arab Republic", value: "SY" },
    { label: "Taiwan", value: "TW" },
    { label: "Tajikistan", value: "TJ" },
    { label: "Tanzania, United Republic of", value: "TZ" },
    { label: "Thailand", value: "TH" },
    { label: "Timor-Leste", value: "TL" },
    { label: "Togo", value: "TG" },
    { label: "Tokelau", value: "TK" },
    { label: "Tonga", value: "TO" },
    { label: "Trinidad and Tobago", value: "TT" },
    { label: "Tunisia", value: "TN" },
    { label: "Turkey", value: "TR" },
    { label: "Turkmenistan", value: "TM" },
    { label: "Turks and Caicos Islands", value: "TC" },
    { label: "Tuvalu", value: "TV" },
    { label: "Uganda", value: "UG" },
    { label: "Ukraine", value: "UA" },
    { label: "United Arab Emirates", value: "AE" },
    { label: "United Kingdom", value: "GB" },
    { label: "United States", value: "US" },
    { label: "United States Minor Outlying Islands", value: "UM" },
    { label: "Uruguay", value: "UY" },
    { label: "Uzbekistan", value: "UZ" },
    { label: "Vanuatu", value: "VU" },
    { label: "Venezuela", value: "VE" },
    { label: "Viet Nam", value: "VN" },
    { label: "Virgin Islands, British", value: "VG" },
    { label: "Virgin Islands, U.S.", value: "VI" },
    { label: "Wallis and Futuna", value: "WF" },
    { label: "Western Sahara", value: "EH" },
    { label: "Yemen", value: "YE" },
    { label: "Zambia", value: "ZM" },
    { label: "Zimbabwe", value: "ZW" }
  ];
  languages = [
    { label: "English", value: "ENGLISH" },
    { label: "Chinese", value: "CHINESE" },
    { label: "Arabic", value: "ARABIC" },
    { label: "Astro-Bavarian", value: "ASTRO_BAVARIAN" },
    { label: "Czech", value: "CZECH" },
    { label: "Danish", value: "DANISH" },
    { label: "Dutch", value: "DUTCH" },
    { label: "Finnish", value: "FINNISH" },
    { label: "French", value: "FRENCH" },
    { label: "German", value: "GERMAN" },
    { label: "Greek", value: "GREEK" },
    { label: "Hindi", value: "HINDI" },
    { label: "Hungarian", value: "HUNGARIAN" },
    { label: "Italian", value: "ITALIAN" },
    { label: "Japanese", value: "JAPANESE" },
    { label: "Lhanda/Punjabi", value: "LHANDA_PUNJABI" },
    { label: "Polish", value: "POLISH" },
    { label: "Portuguese", value: "PORTUGUESE" },
    { label: "Romanian", value: "ROMANIAN" },
    { label: "Russian", value: "RUSSIAN" },
    { label: "Serbian", value: "SERBIAN" },
    { label: "Spanish", value: "SPANISH" },
    { label: "Swedish", value: "SWEDISH" },
    { label: "Turkish", value: "TURKISH" },
    { label: "Ukrainian", value: "UKRAINIAN" }
  ];
  pillars = [
    { label: "SaaS - Vertical - Pillar", value: "SaaS_Vertical_Pillar" },
    {
      label: "SaaS - Services Automation - Pillar",
      value: "SaaS_Services_Automation_Pilla"
    },
    {
      label: "SaaS - Sales Automation - Pillar",
      value: "SaaS_Sales_Automation_Pillar"
    },
    {
      label: "SaaS - Marketing Sales Automation - Pillar",
      value: "SaaS_Marketing_Sales_Automatio"
    },
    { label: "SaaS - HCM - Pillar", value: "SaaS_HCM_Pillar" },
    { label: "SaaS - ERP&EPM - Pillar", value: "SaaS _ERP_EPM_Pillar" },
    {
      label: "SaaS - Advanced Cloud Services - Pillar",
      value: "SaaS_Advanced_Cloud_Services_P"
    },
    {
      label: "PaaS & IaaS - Universal Credit - Pillar",
      value: "PaaS_IaaS_Universal_Credit_Pil"
    },
    { label: "PaaS - Middleware - Pillar", value: "PaaS_Middleware_Pillar" },
    { label: "PaaS - Database - Pillar", value: "PaaS_Database_Pillar" },
    {
      label: "PaaS - Cloud Priority Service - Pillar",
      value: "PaaS_Cloud_Priority_Service_Pi"
    },
    {
      label: "License - Vertical Applications - Pillar",
      value: "License_Vertical_Applications_"
    },
    {
      label: "License - Middleware - Pillar",
      value: "License_Middleware_Pillar"
    },
    { label: "License - Database - Pillar", value: "License_Database_Pillar" },
    {
      label: "License - Applications - Horizontal - Pillar",
      value: "License_Applications_Horizonta"
    },
    {
      label: "IaaS - Public Cloud - Pillar",
      value: "IaaS_Public_Cloud_Pillar"
    },
    {
      label: "IaaS - Private Cloud - Pillar",
      value: "IaaS_Private_Cloud_Pillar"
    },
    {
      label: "IaaS - Managed Cloud Services - Pillar",
      value: "IaaS_Managed_Cloud_Services_Pi"
    },
    {
      label: "Hardware - ZFS and Flash Storage - Pillar",
      value: "Hardware_ZFS_Flash_Storage_Pil"
    },
    { label: "Hardware - Tape - Pillar", value: "Hardware_Tape_Pillar" },
    {
      label: "Hardware - Backup Recovery (ZDLRA) - Pillar",
      value: "Hardware - Backup Recovery (ZD"
    },
    { label: "DaaS - Pillar", value: "DaaS - Pillar" },
    {
      label: "Hardware - Database Appliance",
      value: "Hardware - Database Appliance"
    },
    {
      label: "Hardware - Engineered Systems - Pillar",
      value: "Hardware - Engineered Systems"
    },
    { label: "Hardware - SPARC - Pillar", value: "Hardware - SPARC - Pillar" }
  ];
  platforms = [
    { label: "NO Platform or ALL Platform", value: "NO_ALL_PLATFORM" },
    { label: "Applications Development", value: "APPLICATIONS_DEVELOPMENT" },
    { label: "Apps on IaaS", value: "APPS_IAAS" },
    {
      label: "Business Analytics/Big Data",
      value: "BUSINESS_ANALYTICS_BIG_DATA"
    },
    { label: "Cloud@Cust, ExaCM", value: "CLOUD_CUST_EXACM" },
    { label: "Engineered Systems", value: "ENGINEERED_SYSTEMS" },
    { label: "IaaS, Cloud Infrastructure (OCI)", value: "IAAS_OCI" },
    { label: "Info / Data Management", value: "INFO_DATA_MGMT" },
    { label: "Integration", value: "INTEGRATION" },
    { label: "IT Ops Mgmt", value: "IT_OPS_MGMT" },
    { label: "OCI-C to OCI", value: "OCI_C_OCI" },
    { label: "SAP", value: "SAP" },
    { label: "Security", value: "SECURITY" },
    { label: "Servers & Storage", value: "SERVER_STORAGE" },
    { label: "SaaS - Cloud Tech Ops", value: "SAAS_CLOUD_TECH_OPS" },
    { label: "SaaS-CX", value: "SAAS_CX" },
    { label: "SaaS-ERP/EPM/SCM", value: "SAAS_ERP_EPM_HCM" },
    { label: "SaaS-HCM", value: "SAAS_HCM" },
    { label: "SaaS-Oracle Marketing Cloud", value: "SAAS_OMC" },
    { label: "CEGBU Applied Technology", value: "CEGBU_APPLIED_TECHNOLOGY" },
    { label: "RGBU Enterprise", value: "RGBU_Enterprise" },
    { label: "RGBU OmniChannel", value: "RGBU_OmniChannel" }
  ];
  state = {
    questionNum: 0
  };
  showQuestions = (id, event) => {
    console.log(id);
    this.setState({ questionNum: id });
  };
  render() {
    return (
      <div className="CreateContainer">
        <div className="Heading">
          My Service Requests - Solution Engineering
        </div>
        <div className="ActionBar">
          <button className="CreateButton">Submit Service Request</button>
          <button className="CreateButton">Cancel</button>
        </div>
        <div className="TwoColumns">
          <div className="Columns">
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Opportunity</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="">Select Opportunity</option>
                  {this.opportunities.map((opportunity, i) => {
                    return (
                      <option key={i} value={opportunity.value}>
                        {opportunity.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Account</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="">Select Account</option>
                  {this.accounts.map((account, i) => {
                    return (
                      <option key={i} value={account.value}>
                        {account.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Country</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="">Select Country</option>
                  {this.countries.map((country, i) => {
                    return (
                      <option key={i} value={country.value}>
                        {country.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Language Of Delivery</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="">Select Language</option>
                  {this.languages.map((language, i) => {
                    return (
                      <option key={i} value={language.value}>
                        {language.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="Columns">
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Customer Deadline*</div>
              <div className="ColumnItemRight">
                <input className="CustomerDeadline" type="date" />
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Primary Pillar*</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="">Select Primary Pillar</option>
                  {this.pillars.map((pillar, i) => {
                    return (
                      <option key={i} value={pillar.value}>
                        {pillar.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Additional Pillar</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="">Select Additional Pillar</option>
                  {this.pillars.map((pillar, i) => {
                    return (
                      <option key={i} value={pillar.value}>
                        {pillar.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Platform</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="">Select Platform</option>
                  {this.platforms.map((platform, i) => {
                    return (
                      <option key={i} value={platform.value}>
                        {platform.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Attachments</div>
              <div className="ColumnItemRight">
                <button className="CreateButton">Add/View</button>
              </div>
            </div>
          </div>
        </div>
        <div className="DescriptionBox">
          <div>
            <b>Description*</b>
          </div>
          <div className="DescriptionTextarea">
            <textarea />
          </div>
        </div>
        <div className="ServicesBox">
          <div>
            <b>Services*</b>
          </div>
          <div className="ServiceListing">
            {this.state.questionNum == 0 || this.state.questionNum == 1 ? (
              <div
                className="ServiceItem"
                onClick={this.showQuestions.bind(this, 1)}
              >
                <b>Customer Workshop or Cloud Day -</b> One or many customer
                workshop or event focused on highlighting compelling and
                differentiated positioning of Oracle Solution and Capabilities.
              </div>
            ) : (
              ""
            )}
            {this.state.questionNum == 0 || this.state.questionNum == 2 ? (
              <div
                className="ServiceItem"
                onClick={this.showQuestions.bind(this, 2)}
              >
                <b>Consumption Service -</b> Service focused on enhancing the
                consumption of our service offerings.
              </div>
            ) : (
              ""
            )}
            {this.state.questionNum == 0 || this.state.questionNum == 3 ? (
              <div
                className="ServiceItem"
                onClick={this.showQuestions.bind(this, 3)}
              >
                <b>Opportunity Pursuit -</b> Service which helps in winning the
                current opportunity.
              </div>
            ) : (
              ""
            )}
            {this.state.questionNum == 0 || this.state.questionNum == 4 ? (
              <div
                className="ServiceItem"
                onClick={this.showQuestions.bind(this, 4)}
              >
                <b>Expansion/Renewal Services -</b> Service which is focused on
                Expansion of the services provided, or Renewal of our service
                offerings.
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {this.state.questionNum == 1 ? (
          <div>
            <div className="ChangeServiceBox">
              <button
                className="CreateButton"
                onClick={this.showQuestions.bind(this, 0)}
              >
                Change Service Selection
              </button>
            </div>
            <div className="QuestoionsBox">
              <div>Questions*</div>
              <div>
                <div className="QuestionAnswers">
                  <div className="Question">
                    Any other information for this service request? (e.g.
                    additional products, business context)?*
                  </div>
                  <div className="Answer">
                    <textarea />
                  </div>
                </div>
                <div className="QuestionAnswers">
                  <div className="Question">
                    Does this require on site resources?*
                  </div>
                  <div className="Answer">
                    <textarea />
                  </div>
                </div>
                <div className="QuestionAnswers">
                  <div className="Question">
                    What is the timeline identified to begin the service?*
                  </div>
                  <div className="Answer">
                    <textarea />
                  </div>
                </div>
                <div className="QuestionAnswers">
                  <div className="Question">
                    What needs to be highlighted for the customer?*
                  </div>
                  <div className="Answer">
                    <textarea />
                  </div>
                </div>
                <div className="QuestionAnswers">
                  <div className="Question">
                    Who are the key customer stakeholders and personas to
                    target?*
                  </div>
                  <div className="Answer">
                    <textarea />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.state.questionNum == 2 ? (
          <div>
            <div className="ChangeServiceBox">
              <button
                className="CreateButton"
                onClick={this.showQuestions.bind(this, 0)}
              >
                Change Service Selection
              </button>
            </div>
            <div className="QuestoionsBox">
              <div>Questions*</div>
              <div>
                <div className="QuestionAnswers">
                  <div className="Question">
                    No Questions for the selected service
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.state.questionNum == 3 ? (
          <div>
            <div className="ChangeServiceBox">
              <button
                className="CreateButton"
                onClick={this.showQuestions.bind(this, 0)}
              >
                Change Service Selection
              </button>
            </div>
            <div className="QuestoionsBox">
              <div>Questions*</div>
              <div>
                <div className="QuestionAnswers">
                  <div className="Question">
                    Any other information for this service request? (e.g.
                    additional products, business context)?*
                  </div>
                  <div className="Answer">
                    <textarea />
                  </div>
                </div>
                <div className="QuestionAnswers">
                  <div className="Question">
                    Does this require on site resources?*
                  </div>
                  <div className="Answer">
                    <textarea />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.state.questionNum == 4 ? (
          <div>
            <div className="ChangeServiceBox">
              <button
                className="CreateButton"
                onClick={this.showQuestions.bind(this, 0)}
              >
                Change Service Selection
              </button>
            </div>
            <div className="QuestoionsBox">
              <div>Questions*</div>
              <div>
                <div className="QuestionAnswers">
                  <div className="Question">
                    No Questions for the selected service
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Create;
