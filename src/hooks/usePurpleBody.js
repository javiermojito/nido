import { useEffect } from 'react'

export function usePurpleBody() {
  useEffect(() => {
    document.body.style.backgroundColor = '#6B406F'

    return () => {
      document.body.style.backgroundColor = '#F4F4F4'
    }
  })
}

export default usePurpleBody;