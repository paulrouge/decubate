import './globals.css'
import { GlobalContextProvider } from '../utils/context/globalContext'
import QNectHandler from '@/components/qnect/QNectHandler'
import Sidebar from '@/components/ui/Sidebar'
import OpenSidebarButton from '@/components/ui/OpenSidebarButton'
import FirstRootComponent from './FirstRootComponent'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <GlobalContextProvider>
          {/* first root component is used to pull initial stuff from local storage */}
          <FirstRootComponent/>
          <QNectHandler/>
          <OpenSidebarButton/>
          <Sidebar/>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
