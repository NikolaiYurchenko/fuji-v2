import produce from "immer"
import create from "zustand"
import { devtools } from "zustand/middleware"

export type SnackStore = SnackState & SnackActions

type SnackState = {
  notifications: Snack[]
}

export type Snack = {
  title: string
  body?: string | React.ReactNode
  /**
   * @default undefined (hidden)
   */
  icon?: "success" | "error"
  /**
   * @default 8000 (in milliseconds)
   */
  autoHideDuration?: number
}

type SnackActions = {
  display: (n: Snack) => void
  close: (n: Snack) => void
}

const initialState: SnackState = {
  notifications: [],
}

export const useSnack = create<SnackStore>()(
  devtools(
    (set, get) => ({
      ...initialState,

      display(n) {
        set(
          produce((s: SnackState) => {
            if (!n.autoHideDuration) {
              n.autoHideDuration = 8000
            }
            s.notifications.push(n)
          })
        )
      },

      close(n) {
        set({
          notifications: get().notifications.filter((notif) => notif !== n),
        })
      },
    }),
    {
      enabled: process.env.NEXT_PUBLIC_APP_ENV !== "production",
      name: "xFuji/notifications",
    }
  )
)