import { SyntheticEvent, useState } from "react"
import {
  Alert,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
  Snackbar,
  Stack,
  Typography,
  Box,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import LaunchIcon from "@mui/icons-material/Launch"
import CircleIcon from "@mui/icons-material/Circle"
import CheckIcon from "@mui/icons-material/Check"
import { formatUnits } from "ethers/lib/utils"
import { RoutingStep } from "@x-fuji/sdk"

import { useStore } from "../../store"
import {
  HistoryEntry,
  useHistory,
  HistoryRoutingStep,
} from "../../store/history.store"
import { chainName } from "../../helpers/chainName"

type AccountModalProps = {
  isOpen: boolean
  anchorEl: HTMLElement
  address: string
  closeAccountModal: () => void
}

export default function AccountModal(props: AccountModalProps) {
  const { palette } = useTheme()
  const logout = useStore((state) => state.logout)
  const walletName = useStore((state) => state.walletName)
  const [showSnackbar, setShowSnackbar] = useState(false)
  const historyEntries = useHistory((state) =>
    state.allHash.map((hash) => state.byHash[hash]).slice(0, 3)
  )
  const openModal = useHistory((state) => state.openModal)
  const clearAll = useHistory((state) => state.clearAll)

  const formattedAddress =
    props.address.substring(0, 8) +
    "..." +
    props.address.substring(props.address.length - 4)

  const copy = () => {
    navigator.clipboard.writeText(props.address)
    setShowSnackbar(true)
  }

  const handleClose = (
    _: Event | SyntheticEvent<Element, Event>,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return
    }
    setShowSnackbar(false)
  }

  return (
    <Popover
      open={props.isOpen}
      onClose={props.closeAccountModal}
      anchorEl={props.anchorEl}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      PaperProps={{
        sx: { background: "transparent" },
      }}
    >
      <Card
        sx={{
          border: `1px solid ${palette.secondary.light}`,
          mt: ".75rem",
        }}
      >
        <CardContent sx={{ width: "340px", pb: ".6rem !important" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="xsmall">
              Connected with {walletName}
            </Typography>
            <Button variant="small" onClick={logout}>
              Disconnect
            </Button>
          </Stack>

          <Stack direction="row" alignItems="center" mt=".5rem" mb=".75rem">
            <CircleIcon sx={{ fontSize: "20px" }} />
            <Typography variant="body" ml=".5rem">
              {formattedAddress}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap="1.125rem">
            <Stack
              direction="row"
              alignItems="center"
              sx={{ cursor: "pointer" }}
              onClick={copy}
            >
              <ContentCopyIcon
                fontSize="small"
                sx={{
                  color: palette.primary.main,
                  mr: ".2rem",
                  fontSize: "1rem",
                }}
              />
              <Typography variant="xsmall" color={palette.primary.main}>
                Copy Address
              </Typography>
              <Snackbar
                open={showSnackbar}
                autoHideDuration={2000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ color: palette.success.main }}
                >
                  Address copied!
                </Alert>
              </Snackbar>
            </Stack>

            <Box>
              <a
                href={"https://etherscan.io/address/" + props.address} // TODO: This link only works on mainnet. Make it work with any scanner
                target="_blank" // TODO: target='_blank' doesn't work with NextJS "<Link>"...
                rel="noreferrer"
              >
                <Stack direction="row" alignItems="center">
                  <LaunchIcon
                    sx={{
                      color: palette.info.dark,
                      mr: ".2rem",
                      fontSize: "1rem",
                    }}
                  />
                  <Typography variant="xsmall" color={palette.info.dark}>
                    View on Explorer
                  </Typography>
                </Stack>
              </a>
            </Box>
          </Stack>

          <Divider
            sx={{
              mt: "1rem",
              mb: ".75rem",
              background: palette.secondary.light,
            }}
          />

          <Grid container justifyContent="space-between" mb=".5rem">
            <Typography variant="xsmall">Recent Transactions</Typography>
            <Typography variant="xsmallLink" onClick={clearAll}>
              clear all
            </Typography>
          </Grid>

          <List>
            {historyEntries?.length ? (
              historyEntries.map((e) => (
                <BorrowEntry
                  key={e.hash}
                  entry={e}
                  onClick={() => openModal(e.hash)}
                />
              ))
            ) : (
              <ListItem sx={{ p: 0 }}>
                <Typography variant="xsmallDark">
                  Your recent transaction history will appear here.
                </Typography>
              </ListItem>
            )}
          </List>
        </CardContent>
      </Card>
    </Popover>
  )
}

type BorrowEntryProps = {
  entry: HistoryEntry
  onClick: () => void
}

function BorrowEntry({ entry, onClick }: BorrowEntryProps) {
  const collateral = entry.steps.find(
    (s) => s.step === RoutingStep.DEPOSIT
  ) as HistoryRoutingStep
  const debt = entry.steps.find(
    (s) => s.step === RoutingStep.BORROW
  ) as HistoryRoutingStep

  const { palette } = useTheme()

  const listAction =
    entry.status === "ongoing" ? (
      <CircularProgress size={16} sx={{ mr: "-1rem" }} />
    ) : (
      <CheckIcon
        sx={{
          background: `${palette.success.main}1A`,
          color: palette.success.dark,
          borderRadius: "100%",
          fontSize: "20px",
          mr: "-1rem",
        }}
      />
    )

  return (
    <ListItemButton sx={{ p: 0, mb: ".2rem" }} onClick={onClick}>
      <ListItem secondaryAction={listAction} sx={{ p: 0, pr: "3rem" }}>
        <ListItemText sx={{ m: 0 }}>
          <Typography variant="xsmall">
            Deposit {formatUnits(collateral.amount, collateral.token.decimals)}{" "}
            {collateral.token.symbol} and borrow{" "}
            {formatUnits(debt.amount, debt.token.decimals)} {debt.token.symbol}{" "}
            on {chainName(debt.token.chainId)}
          </Typography>
        </ListItemText>
      </ListItem>
    </ListItemButton>
  )
}
