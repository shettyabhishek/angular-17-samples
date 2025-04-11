import { Routes } from '@angular/router';
import { TailwindComponent } from './components/tailwind/tailwind.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {'path':'',redirectTo: 'home', pathMatch: 'full'},
  {'path':'home',component: HomeComponent},
  {
    'path':'tailwind',component: TailwindComponent,
    'children':[
      { path: '', pathMatch: 'full', redirectTo: 'colorsCls' },
      { path: 'colorsCls', loadComponent: () => import('./components/tailwind/tlwcomps/coloring/coloring.component').then((c) => c.ColoringComponent)  },
      { path: 'spacingCls', loadComponent: () => import('./components/tailwind/tlwcomps/spacing/spacing.component').then((c) => c.SpacingComponent)  },
      { path: 'typography', loadComponent: () => import('./components/tailwind/tlwcomps/typography/typography.component').then((c) => c.TypographyComponent)  },
      { path: 'sizing', loadComponent: () => import('./components/tailwind/tlwcomps/sizing/sizing.component').then((c) => c.SizingComponent)  },
      { path: 'borders', loadComponent: () => import('./components/tailwind/tlwcomps/borders/borders.component').then((c) => c.BordersComponent)  },
      { path: 'responsive', loadComponent: () => import('./components/tailwind/tlwcomps/responsive/responsive.component').then((c) => c.ResponsiveComponent)  },
      { path: 'flexView', loadComponent: () => import('./components/tailwind/tlwcomps/flexview/flexview.component').then((c)=> c.FlexviewComponent)},
      { path: 'gridView', loadComponent: () => import('./components/tailwind/tlwcomps/gridview/gridview.component').then((c)=>c.GridviewComponent)},
      {
        path: 'libComponents', loadComponent: () => import('./components/tailwind/tlwcomps/customLib/lib.component').then((c)=>c.LibComponent),
        'children':[
          { path: '', pathMatch: 'full', redirectTo: 'emlSubsCrd' },
          { path: 'emlSubsCrd', loadComponent: () => import('./components/tailwind/tlwcomps/customLib/comps/email-subscribe/email-subscribe.component').then((c) => c.EmailSubscribeComponent)  },
          { path: 'prcGrid', loadComponent: () => import('./components/tailwind/tlwcomps/customLib/comps/pricing-grids/pricing-grids.component').then((c) => c.PricingGridsComponent)  },
          { path: 'prdModl', loadComponent:() => import('./components/tailwind/tlwcomps/customLib/comps/prduct-modal/prduct-modal.component').then((c)=> c.PrductModalComponent)},
          { path: 'imgGal', loadComponent: () => import('./components/tailwind/tlwcomps/customLib/comps/image-gallery/image-gallery.component').then((c)=> c.ImageGalleryComponent)},
          { path: 'lgnWind', loadComponent: () => import('./components/tailwind/tlwcomps/customLib/comps/image-gallery/image-gallery.component').then((c)=> c.ImageGalleryComponent)}
        ]
      }
    ]
  },
];
