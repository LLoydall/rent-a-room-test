/**
 *
 * Asynchronously loads the component for Teaser
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
