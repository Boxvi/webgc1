import { ISideNavItem } from "../../interfaces/ui/isidenavitem";

export const LEFT_NAV_ITEMS: {
  estudianate: ISideNavItem[],
  empresa: ISideNavItem[],
  administrador: ISideNavItem[]
} = {
  estudianate: [{
    title: 'Perfil',
    iconClass: 'bi bi-file-person-fill',
    link: '/panel/estudiante'
  },
  {
    title: 'Ofertas Laborales',
    iconClass: 'bi bi-linkedin',
    link: '/ofertas'
  },
  {
    title: 'Ofertas Aplicadas',
    iconClass: 'bi bi-check-circle-fill',
    link: '/ofertas/ofertasAplicadas'
  }
  ],
  empresa: [{
    title: 'Datos Empresa',
    iconClass: 'bi bi-buildings-fill',
    link: '/panel/empresa'
  },
  {
    title: 'Hojas de Vida',
    iconClass: 'bi bi-person-vcard-fill'
  }],
  administrador: [
    {
      title: 'Tablero',
      iconClass: 'bi bi-speedometer'
    },
    {
      title: 'Hojas de Vida',
      iconClass: 'bi bi-person-vcard-fill'
    },
    {
      title: 'Perfiles Empresariales',
      iconClass: 'bi bi-buildings-fill'
    },
    {
      title: 'Ofertas Laborales',
      iconClass: 'bi bi-linkedin'
    },
    {
      title: 'Reportes estadísticos',
      iconClass: 'bi bi-clipboard-data-fill'
    }
  ]
};