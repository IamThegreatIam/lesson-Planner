
import { GradeCurriculum } from '../types';

export const KISWAHILI_CURRICULUM: GradeCurriculum[] = [
  {
    id: 'grade-7',
    name: 'Grade 7',
    strands: [
      {
        id: 'usafi',
        name: 'Usafi wa Kibinafsi',
        subStrands: [
          {
            id: 'kusikiliza',
            name: 'Kusikiliza na Kuzungumza',
            lessons: [
              { id: 'kz-1', name: 'Kusikiliza na kujibu (Simba na Mnyama Mgeni)' },
              { id: 'kz-2', name: 'Kusikiliza na kujibu (Adabu za maamkizi)' }
            ]
          },
          {
            id: 'kusoma-ufahamu',
            name: 'Kusoma',
            lessons: [
              { id: 'ks-1', name: 'Ufahamu wa kifungu cha simulizi (Picha)' },
              { id: 'ks-2', name: 'Ufahamu wa kifungu cha simulizi (Maswali)' },
              { id: 'ks-3', name: 'Ufahamu wa kifungu cha simulizi (Mtandaoni)' }
            ]
          },
          {
            id: 'kuandika-viakifishi',
            name: 'Kuandika',
            lessons: [
              { id: 'ka-1', name: 'Viakifishi: Herufi kubwa' },
              { id: 'ka-2', name: 'Viakifishi: Kikomo' }
            ]
          },
          {
            id: 'sarufi-nomino',
            name: 'Sarufi',
            lessons: [
              { id: 'sr-1', name: 'Aina za nomino: Nomino za pekee (Kutambua)' },
              { id: 'sr-2', name: 'Aina za nomino: Nomino za pekee (Sentensi)' },
              { id: 'sr-3', name: 'Aina za nomino: Nomino za kawaida (Kutambua)' },
              { id: 'sr-4', name: 'Aina za nomino: Nomino za kawaida (Matumizi)' }
            ]
          }
        ]
      },
      {
        id: 'lishe',
        name: 'Lishe Bora',
        subStrands: [
          {
            id: 'kusikiliza-kina',
            name: 'Kusikiliza kwa Kina',
            lessons: [
              { id: 'kk-1', name: 'Sauti dh na th (Kusikiliza)' },
              { id: 'kk-2', name: 'Vitanzandimi (dh na th)' }
            ]
          },
          {
            id: 'kusoma-mapana',
            name: 'Kusoma kwa Mapana',
            lessons: [
              { id: 'km-1', name: 'Kusimulia kisa' },
              { id: 'km-2', name: 'Kusoma matini maktabani/mtandaoni' },
              { id: 'km-3', name: 'Kuandika muhtasari wa hadithi' }
            ]
          },
          {
            id: 'kuandika-barua',
            name: 'Kuandika',
            lessons: [
              { id: 'kb-1', name: 'Barua ya kirafiki ya mwaliko (Kusoma)' },
              { id: 'kb-2', name: 'Barua ya kirafiki ya mwaliko (Kuandika)' }
            ]
          },
          {
            id: 'sarufi-makundi',
            name: 'Sarufi',
            lessons: [
              { id: 'sm-1', name: 'Nomino za makundi (Kutambua)' },
              { id: 'sm-2', name: 'Nomino za makundi (Sentensi)' },
              { id: 'sm-3', name: 'Nomino za dhahania (Kutambua)' },
              { id: 'sm-4', name: 'Nomino za dhahania (Sentensi)' }
            ]
          }
        ]
      },
      {
        id: 'uhuru',
        name: 'Uhuru wa Wanyama',
        subStrands: [
          {
            id: 'fasihi',
            name: 'Fasihi',
            lessons: [
              { id: 'fs-1', name: 'Tanzu za fasihi (Maana)' },
              { id: 'fs-2', name: 'Aina za tungo za fasihi' }
            ]
          },
          {
            id: 'kusoma-novela',
            name: 'Kusoma',
            lessons: [
              { id: 'kn-1', name: 'Kusoma kwa kina: Novela (Maana)' },
              { id: 'kn-2', name: 'Kusoma kwa kina: Novela (Sifa)' }
            ]
          },
          {
            id: 'insha-kubuni',
            name: 'Kuandika',
            lessons: [
              { id: 'ik-1', name: 'Insha za kubuni (Mada)' },
              { id: 'ik-2', name: 'Insha za kubuni (Kuandika)' }
            ]
          },
          {
            id: 'sarufi-wingi',
            name: 'Sarufi',
            lessons: [
              { id: 'sw-1', name: 'Nomino za wingi (Kutambua)' },
              { id: 'sw-2', name: 'Nomino za wingi (Sentensi)' },
              { id: 'sw-3', name: 'Nomino za vitenzi-jina (Kutambua)' },
              { id: 'sw-4', name: 'Nomino za vitenzi-jina (Matumizi)' }
            ]
          }
        ]
      },
      {
        id: 'maliasili',
        name: 'Aina za Maliasili',
        subStrands: [
          {
            id: 'nyimbo',
            name: 'Nyimbo',
            lessons: [
              { id: 'ny-1', name: 'Nyimbo za watoto (Kutaja)' },
              { id: 'ny-2', name: 'Sifa za nyimbo za watoto' },
              { id: 'ny-3', name: 'Nyimbo za bembelezi (Kutaja)' },
              { id: 'ny-4', name: 'Sifa za nyimbo za bembelezi' }
            ]
          },
          {
            id: 'kusoma-ufasaha',
            name: 'Kusoma',
            lessons: [
              { id: 'ku-1', name: 'Kusoma kwa ufasaha (Kifungu)' },
              { id: 'ku-2', name: 'Kuigiza mtangazaji' }
            ]
          },
          {
            id: 'insha-masimulizi',
            name: 'Kuandika',
            lessons: [
              { id: 'im-1', name: 'Insha ya masimulizi (Lugha)' },
              { id: 'im-2', name: 'Insha ya masimulizi (Wahusika na Mandhari)' }
            ]
          },
          {
            id: 'sarufi-nyakati',
            name: 'Sarufi',
            lessons: [
              { id: 'sn-1', name: 'Wakati uliopo' },
              { id: 'sn-2', name: 'Wakati uliopita' },
              { id: 'sn-3', name: 'Wakati ujao' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'grade-8',
    name: 'Grade 8',
    strands: [
      {
        id: 'usafi-umma',
        name: 'Usafi wa Sehemu za Umma',
        subStrands: [
          {
            id: 'kusikiliza-mahojiano',
            name: 'Kusikiliza na Kuzungumza: Mahojiano',
            lessons: [
              { id: 'km-1', name: 'Kusikiliza mahojiano' },
              { id: 'km-2', name: 'Kujibu mahojiano' }
            ]
          },
          {
            id: 'kusoma-simulizi',
            name: 'Kusoma: Ufahamu wa Simulizi',
            lessons: [
              { id: 'ks-1', name: 'Kudondoa habari na kupanga matukio' },
              { id: 'ks-2', name: 'Utabiri na msamiati katika ufahamu' }
            ]
          },
          {
            id: 'kuandika-viakifishi',
            name: 'Kuandika: Viakifishi',
            lessons: [
              { id: 'kv-1', name: 'Alama ya hisi na ritifaa (Kutambua)' },
              { id: 'kv-2', name: 'Alama ya hisi na ritifaa (Kutumia)' }
            ]
          },
          {
            id: 'sarufi-viwakilishi',
            name: 'Sarufi: Viwakilishi',
            lessons: [
              { id: 'sv-1', name: 'Viwakilishi vya nafsi, vionyeshi na idadi (Kutambua)' },
              { id: 'sv-2', name: 'Viwakilishi vya nafsi, vionyeshi na idadi (Kutumia)' }
            ]
          }
        ]
      },
      {
        id: 'matumizi-dawa',
        name: 'Matumizi Yafaayo ya Dawa',
        subStrands: [
          {
            id: 'sauti-g-gh',
            name: 'Kusikiliza kwa Kina',
            lessons: [
              { id: 'sg-1', name: 'Sauti /g/ na /gh/ (Kutambua)' },
              { id: 'sg-2', name: 'Sauti /g/ na /gh/ (Kutamka)' }
            ]
          },
          {
            id: 'kusoma-mapana',
            name: 'Kusoma kwa Mapana',
            lessons: [
              { id: 'kp-1', name: 'Matini ya kujichagulia (Msamiati)' },
              { id: 'kp-2', name: 'Matini ya kujichagulia (Ujumbe)' }
            ]
          },
          {
            id: 'barua-kirafiki',
            name: 'Kuandika: Barua ya Kirafiki',
            lessons: [
              { id: 'bk-1', name: 'Barua ya kutoa shukrani (Umuhimu)' },
              { id: 'bk-2', name: 'Barua ya kutoa shukrani (Muundo)' }
            ]
          },
          {
            id: 'viwakilishi-sifa',
            name: 'Sarufi: Viwakilishi',
            lessons: [
              { id: 'vs-1', name: 'Viwakilishi vya sifa, pekee na viulizi (Kutambua)' },
              { id: 'vs-2', name: 'Viwakilishi vya sifa, pekee na viulizi (Kutumia)' }
            ]
          }
        ]
      },
      {
        id: 'dhiki-wanyama',
        name: 'Dhiki Zinazokumba Wanyama',
        subStrands: [
          {
            id: 'mighani',
            name: 'Kusikiliza na Kuzungumza: Mighani',
            lessons: [
              { id: 'mg-1', name: 'Maana na sifa za mighani' },
              { id: 'mg-2', name: 'Ujumbe na uwasilishaji wa mighani' }
            ]
          },
          {
            id: 'tamthilia',
            name: 'Kusoma kwa Kina: Tamthilia',
            lessons: [
              { id: 'tm-1', name: 'Maana na sifa za tamthilia' },
              { id: 'tm-2', name: 'Kuchambua tamthilia' }
            ]
          },
          {
            id: 'insha-masimulizi',
            name: 'Kuandika: Insha ya Masimulizi',
            lessons: [
              { id: 'im-1', name: 'Wazo kuu katika insha' },
              { id: 'im-2', name: 'Kuendeleza wazo kuu' }
            ]
          },
          {
            id: 'vimilikishi',
            name: 'Sarufi: Viwakilishi',
            lessons: [
              { id: 'vm-1', name: 'Viwakilishi vimilikishi na visisitizi (Kutambua)' },
              { id: 'vm-2', name: 'Viwakilishi vimilikishi na visisitizi (Kutumia)' }
            ]
          }
        ]
      },
      {
        id: 'maliasili-bora',
        name: 'Matumizi Bora ya Maliasili',
        subStrands: [
          {
            id: 'visasili',
            name: 'Hadithi Visasili',
            lessons: [
              { id: 'vs-1', name: 'Maana na sifa za visasili' },
              { id: 'vs-2', name: 'Uwasilishaji wa visasili' }
            ]
          },
          {
            id: 'kusoma-ufasaha',
            name: 'Kusoma kwa Ufasaha',
            lessons: [
              { id: 'ku-1', name: 'Kusoma kwa matamshi bora' },
              { id: 'ku-2', name: 'Kusoma kwa sauti na ishara' }
            ]
          },
          {
            id: 'insha-lugha',
            name: 'Kuandika: Insha ya Masimulizi',
            lessons: [
              { id: 'il-1', name: 'Mbinu za lugha katika insha' },
              { id: 'il-2', name: 'Wahusika na mandhari' }
            ]
          },
          {
            id: 'nyakati-hali',
            name: 'Sarufi: Nyakati na Hali',
            lessons: [
              { id: 'nh-1', name: 'Hali ya mazoea na timilifu (Maana)' },
              { id: 'nh-2', name: 'Hali ya mazoea na timilifu (Matumizi)' }
            ]
          }
        ]
      },
      {
        id: 'majukumu-jinsia',
        name: 'Majukumu ya Kijinsia',
        subStrands: [
          {
            id: 'maagizo',
            name: 'Kusikiliza: Maagizo',
            lessons: [
              { id: 'mg-1', name: 'Maana na kutambua maagizo' },
              { id: 'mg-2', name: 'Kutoa na kupokea maagizo' }
            ]
          },
          {
            id: 'kusoma-ufahamu-2',
            name: 'Kusoma kwa Ufahamu',
            lessons: [
              { id: 'ku-3', name: 'Kudondoa habari na msamiati' }
            ]
          },
          {
            id: 'insha-maelekezo',
            name: 'Kuandika: Insha ya Maelekezo',
            lessons: [
              { id: 'ie-1', name: 'Sifa za insha ya maelekezo' },
              { id: 'ie-2', name: 'Kuandika insha ya maelekezo' }
            ]
          },
          {
            id: 'nyakati-hali-2',
            name: 'Sarufi: Nyakati na Hali',
            lessons: [
              { id: 'nh-3', name: 'Wakati uliopita/ujao hali timilifu (Viambishi)' },
              { id: 'nh-4', name: 'Wakati uliopita/ujao hali timilifu (Kutumia)' }
            ]
          }
        ]
      },
      {
        id: 'usalama-nyumbani',
        name: 'Usalama Nyumbani',
        subStrands: [
          {
            id: 'kusikiliza-kufasiri',
            name: 'Kusikiliza kwa Kufasiri',
            lessons: [
              { id: 'kf-1', name: 'Kutambua ujumbe na uhusiano na maisha' },
              { id: 'kf-2', name: 'Mafunzo kutokana na ujumbe' }
            ]
          },
          {
            id: 'tamthilia-maudhui',
            name: 'Kusoma: Tamthilia',
            lessons: [
              { id: 'tm-3', name: 'Maudhui katika tamthilia' },
              { id: 'tm-4', name: 'Dhamira katika tamthilia' }
            ]
          },
          {
            id: 'insha-mdokezo',
            name: 'Kuandika: Insha ya Mdokezo',
            lessons: [
              { id: 'imd-1', name: 'Maana na aina za insha ya mdokezo' },
              { id: 'imd-2', name: 'Kuandika insha ya mdokezo' }
            ]
          },
          {
            id: 'vivumishi-sifa',
            name: 'Sarufi: Vivumishi',
            lessons: [
              { id: 'vvs-1', name: 'Vivumishi vya sifa na viashiria (Kutambua)' },
              { id: 'vvs-2', name: 'Vivumishi vya sifa na viashiria (Kutumia)' }
            ]
          }
        ]
      },
      {
        id: 'mahitaji-maalumu',
        name: 'Kuhudumia Wenye Mahitaji Maalumu',
        subStrands: [
          {
            id: 'usikilizaji-husishi',
            name: 'Usikilizaji Husishi',
            lessons: [
              { id: 'uh-1', name: 'Maana na vipengele vya usikilizaji husishi' },
              { id: 'uh-2', name: 'Kushiriki katika usikilizaji husishi' }
            ]
          },
          {
            id: 'ufupisho',
            name: 'Kusoma: Ufupisho',
            lessons: [
              { id: 'uf-1', name: 'Maana na vipengele vya ufupisho' },
              { id: 'uf-2', name: 'Kufupisha kifungu' }
            ]
          },
          {
            id: 'insha-maelezo',
            name: 'Kuandika: Insha ya Maelezo',
            lessons: [
              { id: 'ime-1', name: 'Tamathali za lugha katika insha ya maelezo' },
              { id: 'ime-2', name: 'Kuandika insha ya maelezo' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'grade-9',
    name: 'Grade 9',
    strands: [
      {
        id: 'usafi-mazingira',
        name: 'Usafi wa Mazingira',
        subStrands: [
          {
            id: 'mjadala',
            name: 'Kusikiliza na Kujibu: Mjadala',
            lessons: [
              { id: 'mj-1', name: 'Vipengele vya kuzingatia katika kusikiliza na kuchangia mjadala' },
              { id: 'mj-2', name: 'Kushiriki mjadala kwa kuzingatia vipengele vifaavyo' }
            ]
          },
          {
            id: 'ufahamu-simulizi',
            name: 'Kusoma kwa Ufahamu: Kifungu cha Simulizi',
            lessons: [
              { id: 'us-1', name: 'Kudondoa habari mahususi katika kifungu cha simulizi' },
              { id: 'us-2', name: 'Utabiri, ufasiri na msamiati katika kifungu cha simulizi' }
            ]
          },
          {
            id: 'viakifishi',
            name: 'Kuandika: Viakifishi',
            lessons: [
              { id: 'vk-1', name: 'Kutambua na kutumia alama ya koloni' },
              { id: 'vk-2', name: 'Kutambua na kutumia alama ya semi koloni' }
            ]
          },
          {
            id: 'vihusishi-mahali',
            name: 'Sarufi: Vihusishi',
            lessons: [
              { id: 'vm-1', name: 'Kutambua na kutumia vihusishi vya mahali' },
              { id: 'vm-2', name: 'Kutambua na kutumia vihusishi vya wakati' }
            ]
          },
          {
            id: 'sauti-b-mb',
            name: 'Kusikiliza kwa Kina: Sauti /b/ na /mb/',
            lessons: [
              { id: 'sb-1', name: 'Kutamka sauti /b/ na /mb/ na vitanzandimi vyake' }
            ]
          },
          {
            id: 'matini-kujichagulia',
            name: 'Kusoma kwa Mapana',
            lessons: [
              { id: 'mk-1', name: 'Kuteua, kufafanua ujumbe na msamiati wa matini' },
              { id: 'mk-2', name: 'Kutumia kamusi na kutunga sentensi' }
            ]
          },
          {
            id: 'barua-kirafiki',
            name: 'Kuandika: Barua ya Kirafiki',
            lessons: [
              { id: 'bk-1', name: 'Ujumbe, lugha na muundo wa kujibu barua ya kirafiki' },
              { id: 'bk-2', name: 'Kuandika majibu ya barua ya kirafiki' }
            ]
          },
          {
            id: 'vihusishi-unganifu',
            name: 'Sarufi: Vihusishi',
            lessons: [
              { id: 'vu-1', name: 'Kutambua na kutumia vihusishi vya -a unganifu' },
              { id: 'vu-2', name: 'Kutambua na kutumia vihusishi vya sababu' }
            ]
          }
        ]
      },
      {
        id: 'utunzaji-wanyama',
        name: 'Utunzaji wa Wanyama',
        subStrands: [
          {
            id: 'semi-tashbihi',
            name: 'Kusikiliza na Kuzungumza: Semi',
            lessons: [
              { id: 'st-1', name: 'Kueleza na kutambua tashbihi, sitiari na methali' },
              { id: 'st-2', name: 'Kutumia tashbihi, sitiari na methali katika uwasilishaji' }
            ]
          },
          {
            id: 'ushairi-sifa',
            name: 'Kusoma kwa Kina: Sifa za Ushairi',
            lessons: [
              { id: 'su-1', name: 'Maana na sifa za ushairi' },
              { id: 'su-2', name: 'Kuchambua sifa za ushairi katika diwani teule' }
            ]
          },
          {
            id: 'insha-masimulizi',
            name: 'Kuandika: Insha za Kubuni',
            lessons: [
              { id: 'im-1', name: 'Kufafanua ujumbe (Utangulizi, Kiini, Hitimisho, Wahusika)' },
              { id: 'im-2', name: 'Kuandika insha ya masimulizi' }
            ]
          },
          {
            id: 'vihusishi-vilinganishi',
            name: 'Sarufi: Vihusishi',
            lessons: [
              { id: 'vv-1', name: 'Kutambua na kutumia vihusishi vilinganishi' },
              { id: 'vv-2', name: 'Kutambua na kutumia kihusishi na' }
            ]
          },
          {
            id: 'vitendawili',
            name: 'Kusikiliza na Kuzungumza: Semi',
            lessons: [
              { id: 'vt-1', name: 'Maana, kutambua na kuwasilisha vitendawili' }
            ]
          },
          {
            id: 'nahau',
            name: 'Kusikiliza na Kuzungumza: Semi',
            lessons: [
              { id: 'nh-1', name: 'Maana, kutambua na matumizi ya nahau' }
            ]
          },
          {
            id: 'kusoma-ufasaha',
            name: 'Kusoma kwa Ufasaha',
            lessons: [
              { id: 'ku-1', name: 'Kusoma kwa matamshi bora na kasi ifaayo' },
              { id: 'ku-2', name: 'Kusoma kwa kuzingatia ishara za mwili' }
            ]
          },
          {
            id: 'lugha-kitamathali',
            name: 'Kuandika: Insha za Kubuni',
            lessons: [
              { id: 'lk-1', name: 'Lugha ya kitamathali, matendo na mandhari' },
              { id: 'lk-2', name: 'Kuandika insha yenye lugha ya kitamathali na mandhari' }
            ]
          },
          {
            id: 'nyakati-hali',
            name: 'Sarufi: Nyakati na Hali',
            lessons: [
              { id: 'nh-1', name: 'Matumizi ya -ki- ya masharti' },
              { id: 'nh-2', name: 'Matumizi ya -ka- ya kufuatana kwa vitendo' }
            ]
          },
          {
            id: 'ufahamu-kusikiliza',
            name: 'Kusikiliza na Kuzungumza',
            lessons: [
              { id: 'uk-1', name: 'Maana, kanuni na vipengele vya ufahamu wa kusikiliza' },
              { id: 'uk-2', name: 'Kushiriki katika ufahamu wa kusikiliza' }
            ]
          },
          {
            id: 'kusoma-ufahamu',
            name: 'Kusoma kwa Ufahamu',
            lessons: [
              { id: 'kuf-1', name: 'Kudondoa habari, utabiri na ufasiri' },
              { id: 'kuf-2', name: 'Kutambua na kutumia msamiati wa kifungu' }
            ]
          },
          {
            id: 'shajara',
            name: 'Kuandika: Insha za Kiuamilifu',
            lessons: [
              { id: 'sh-1', name: 'Maana, vipengele na kuandika shajara' }
            ]
          },
          {
            id: 'hali-masharti',
            name: 'Sarufi: Hali za Masharti',
            lessons: [
              { id: 'hm-1', name: 'Kutambua na kutumia hali ya masharti -nge-' },
              { id: 'hm-2', name: 'Kutambua na kutumia hali ya masharti -ngali-' }
            ]
          }
        ]
      },
      {
        id: 'usalama-barabarani',
        name: 'Usalama Barabarani',
        subStrands: [
          {
            id: 'kusikiliza-kufasiri',
            name: 'Kusikiliza na Kuzungumza: Kufasiri',
            lessons: [
              { id: 'kk-1', name: 'Maana na kueleza misimamo/mielekeo' },
              { id: 'kk-2', name: 'Kulinganisha misimamo na mielekeo ya ujumbe' }
            ]
          }
        ]
      }
    ]
  }
];
