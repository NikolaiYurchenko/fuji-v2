import { NextPage } from "next"
import Head from "next/head"

import {
  Container,
  Divider,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material"

import Borrow from "../components/Borrow/Borrow"
import Footer from "../components/Shared/Footer"
import Header from "../components/Shared/Header"
import Overview from "../components/Borrow/Overview"
import TransactionSummary from "../components/Borrow/TransactionSummary"

const BorrowPage: NextPage = () => {
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down("sm"))

  return (
    <>
      <Head>
        <title>Borrow - xFuji</title>
        <meta
          name="description"
          content="borrow at the best rate on any chain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Divider
        sx={{
          display: { xs: "block", sm: "none" },
          mb: "1rem",
        }}
      />

      <Container
        sx={{
          mt: { xs: "0", sm: "4rem" },
          mb: { xs: "7rem", sm: "0" },
          pl: { xs: "0.25rem", sm: "1rem" },
          pr: { xs: "0.25rem", sm: "1rem" },
          minHeight: "75vh",
        }}
      >
        <Grid container wrap="wrap" alignItems="flex-start" spacing={3}>
          <Grid item xs={12} md={5}>
            <Borrow />
          </Grid>
          <Grid item sm={12} md={7}>
            {isMobile ? <TransactionSummary /> : <Overview />}
          </Grid>
        </Grid>
      </Container>

      {!isMobile && <Footer />}
    </>
  )
}

export default BorrowPage
