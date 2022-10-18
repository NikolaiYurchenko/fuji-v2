import { useEffect, useState } from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
} from "@mui/material"
import { useTheme, styled, alpha } from "@mui/material/styles"
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector"
import { StepIconProps } from "@mui/material/StepIcon"
import CloseIcon from "@mui/icons-material/Close"
import LaunchIcon from "@mui/icons-material/Launch"
import CheckIcon from "@mui/icons-material/Check"
import Image from "next/image"
import shallow from "zustand/shallow"

import styles from "../../styles/components/Borrow.module.css"
import { useStore } from "../../store"

type Step = {
  label: string
  description: string
  link: string | undefined
}

type TransactionProcessingModalProps = {
  open: boolean
  handleClose: (e: {}) => void
}

const steps: Step[] = [
  {
    label: "Deposit 1 ETH on Aave",
    description: "Ethereum Network",
    link: "https://ethereum.org/fr/",
  },
  {
    label: "Validate Transaction",
    description: "Connext bridge",
    link: "https://www.connext.network/",
  },
  {
    label: "Borrow 900 USDC from Aave",
    description: "Polygon Network",
    link: undefined,
  },
]

export default function TransactionProcessingModal(
  props: TransactionProcessingModalProps
) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [activeStep, setActiveStep] = useState(2)

  const { transactionStatus, setTransactionStatus } = useStore(
    (state) => ({
      transactionStatus: state.transactionStatus,
      setTransactionStatus: state.setTransactionStatus,
    }),
    shallow
  )

  useEffect(() => {
    const sleep = setTimeout(() => setTransactionStatus(false), 10000) // TODO: change this sleeping process
    return () => {
      clearTimeout(sleep)
    }
  })

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)

  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

  const handleReset = () => setActiveStep(0)

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      sx={{
        ".MuiPaper-root": {
          width: isMobile ? "100%" : "auto",
        },
        backdropFilter: { xs: "blur(0.313rem)", sm: "none" },
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          p: { xs: "1rem", sm: "1.5rem" },
          maxHeight: {
            xs: !transactionStatus ? "28rem" : "",
            sm: !transactionStatus ? "24.688rem" : "",
          },
        }}
      >
        <CloseIcon
          sx={{
            cursor: "pointer",
            float: "right",
          }}
          onClick={props.handleClose}
          fontSize="small"
        />

        <Box textAlign="center" mt="1.625rem" mb="2.688rem">
          {!transactionStatus ? (
            <>
              <CheckIcon
                sx={{
                  backgroundColor: alpha(theme.palette.success.dark, 0.1),
                  color: theme.palette.success.dark,
                  borderRadius: "100%",
                  padding: "0.4rem",
                  width: "3.75rem",
                  height: "3.75rem",
                  mb: "2.5rem",
                }}
              />
              <Typography variant="h5">Transaction successful!</Typography>
              <Typography variant="body">
                You have borrowed 900.00 USDC
              </Typography>
              <Grid container justifyContent="center">
                <Button
                  className={styles.btn}
                  variant="text"
                  sx={{ mt: "1.5rem", mb: "2rem" }}
                >
                  Add USDC
                </Button>
              </Grid>
              <Grid
                container
                columnGap="1rem"
                rowGap="1rem"
                justifyContent="center"
                sx={{ flexDirection: { xs: "column-reverse", sm: "row" } }}
              >
                <Button
                  sx={{ minWidth: "13rem" }}
                  variant={isMobile ? "ghost" : "secondary"}
                  className={styles.btn}
                >
                  Transaction Details
                </Button>
                <Button
                  sx={{ minWidth: "13rem" }}
                  variant="gradient"
                  className={styles.btn}
                >
                  View Position
                </Button>
              </Grid>
            </>
          ) : (
            <>
              <Typography variant="h6">Transaction processing</Typography>
              <Typography variant="body">
                Borrowing on Polygon Network
              </Typography>
            </>
          )}
        </Box>
        {transactionStatus && (
          <DialogContent>
            <Stepper
              activeStep={activeStep}
              orientation="vertical"
              connector={<CustomConnector />}
            >
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <Grid
                    container
                    justifyContent="space-between"
                    wrap="nowrap"
                    alignItems="center"
                  >
                    <Grid item>
                      <StepLabel StepIconComponent={CustomStepIcon}>
                        <Typography variant="body">{step.label}</Typography>
                        <br />
                        <a href={step.link} target="_blank" rel="noreferrer">
                          <Typography variant="smallDark">
                            {step.description}
                          </Typography>
                          {step.link && (
                            <LaunchIcon
                              sx={{
                                ml: "0.3rem",
                                fontSize: "0.6rem",
                                color: theme.palette.info.dark,
                              }}
                            />
                          )}
                        </a>
                      </StepLabel>
                    </Grid>
                    <Grid item>
                      {activeStep === index ? (
                        <CircularProgress size={32} />
                      ) : (
                        <CheckIcon
                          sx={{
                            backgroundColor: theme.palette.success.dark,
                            borderRadius: "100%",
                            padding: "0.4rem",
                          }}
                          fontSize="large"
                        />
                      )}
                    </Grid>
                  </Grid>
                </Step>
              ))}
            </Stepper>
            <Card
              variant="outlined"
              sx={{
                p: 0,
                textAlign: "center",
                mt: "2.5rem",
                maxWidth: "27rem",
              }}
            >
              <CardContent>
                <Typography variant="small">
                  This step takes a few minutes to process. If you close this
                  window, your transaction will still be processed.
                </Typography>
              </CardContent>
            </Card>
          </DialogContent>
        )}
      </Paper>
    </Dialog>
  )
}

function CustomStepIcon(props: StepIconProps) {
  const { palette } = useTheme()

  const icons: Record<string, React.ReactElement> = {
    1: (
      <Image
        src={`/assets/images/protocol-icons/networks/Ethereum.svg`}
        height={32}
        width={32}
        alt="Ethereum"
      />
    ),
    2: (
      <Image
        src={`/assets/images/logo/Connext.svg`}
        height={32}
        width={32}
        alt="Connext"
      />
    ),
    3: (
      <Image
        src={`/assets/images/protocol-icons/networks/Polygon.svg`}
        height={32}
        width={32}
        alt="Polygon"
      />
    ),
  }

  return (
    <Box
      sx={{
        background: palette.secondary.light,
        mr: "0.5rem",
        p: "0.5rem",
        borderRadius: "100%",
        paddingBottom: "0.3rem",
      }}
    >
      {icons[String(props.icon)]}
    </Box>
  )
}

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderLeft: `0.125rem solid ${theme.palette.secondary.light}`,
    marginLeft: "0.7rem",
    marginTop: "-0.5rem",
    marginBottom: "-0.5rem",
    height: "3rem",
  },
}))
