import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom'

import { Loader } from '@components/ui'
import { MainLayout } from '@share/components/layouts'
import { ROUTER_BOOK } from './routerBook'
import { RouterError } from './components'

const TodoViewPage = lazy(() => import('@pages/todo/page-view'))
const TodoCreatePage = lazy(() => import('@pages/todo/page-create'))
const TodoEditPage = lazy(() => import('@pages/todo/page-edit'))

export const Router = () => (
  <Suspense fallback={<Loader fullScreen />}>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} errorElement={<RouterError />}>
          <Route path={ROUTER_BOOK.TODO.INDEX}>
            <Route index element={<TodoViewPage />} />
            <Route path={ROUTER_BOOK.TODO.CREATE} element={<TodoCreatePage />} />
            <Route path={ROUTER_BOOK.TODO.EDIT} element={<TodoEditPage />} />
          </Route>
        </Route>

        <Route path='*' element={<Navigate to={ROUTER_BOOK.TODO.INDEX} replace />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
)
