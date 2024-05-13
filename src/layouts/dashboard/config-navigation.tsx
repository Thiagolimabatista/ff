import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  tour: icon('ic_tour'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  product: icon('ic_product'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // {
      //   items: [
      //     {
      //       title: 'Dashboard',
      //       path: paths.dashboard.root,
      //       icon: ICONS.dashboard,
      //     },
      //   ],
      // },

      {
        items: [
          // USER
          {
            title: 'FFO',
            path: paths.dashboard.user.root,
            icon: ICONS.kanban,
            children: [
              { title: 'Banner', path: paths.dashboard.site.banner },
              { title: 'Bloqueios ', path: paths.dashboard.site.bloqueios },
              { title: 'Circuitos', path: paths.dashboard.site.circuitos },
              { title: 'Câmbio', path: paths.dashboard.site.cambio },
            ],
          },
          {
            title: 'Lazertur',
            path: paths.dashboard.user.root,
            icon: ICONS.kanban,
            children: [
              { title: 'Banner', path: paths.dashboard.lazertur.banner },
              { title: 'destinos', path: paths.dashboard.lazertur.destinos },
              { title: 'Pacotes', path: paths.dashboard.lazertur.packages },
            ],
          },

          // {
          //   title: 'Quem somos',
          //   path: paths.dashboard.job.root,
          //   icon: ICONS.job,
          //   children: [
          //     { title: 'list', path: paths.dashboard.job.root },
          //     { title: 'details', path: paths.dashboard.job.demo.details },
          //     { title: 'create', path: paths.dashboard.job.new },
          //     { title: 'edit', path: paths.dashboard.job.demo.edit },
          //   ],
          // },

          // {
          //   title: 'Registros',
          //   path: paths.dashboard.product.root,
          //   icon: ICONS.file,
          //   children: [
          //     { title: 'list', path: paths.dashboard.product.root },
          //     {
          //       title: 'details',
          //       path: paths.dashboard.product.demo.details,
          //     },
          //     { title: 'create', path: paths.dashboard.product.new },
          //     { title: 'edit', path: paths.dashboard.product.demo.edit },
          //   ],
          // },
          // {
          //   title: 'Destinos',
          //   path: paths.dashboard.tour.root,
          //   icon: ICONS.tour,
          //   children: [
          //     { title: 'list', path: paths.dashboard.tour.root },
          //     { title: 'details', path: paths.dashboard.tour.demo.details },
          //     { title: 'create', path: paths.dashboard.tour.new },
          //     { title: 'edit', path: paths.dashboard.tour.demo.edit },
          //   ],
          // },

          // {
          //   title: 'blog',
          //   path: paths.dashboard.post.root,
          //   icon: ICONS.blog,
          //   children: [
          //     { title: 'list', path: paths.dashboard.post.root },
          //     { title: 'create', path: paths.dashboard.post.new },
          //     { title: 'edit', path: paths.dashboard.post.demo.edit },
          //   ],
          // },
        ],
      },
    ],
    []
  );

  return data;
}
