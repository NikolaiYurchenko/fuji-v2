import {
  Chip,
  Collapse,
  Grid,
  TableCell,
  TableRow,
  useTheme,
} from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import { DropletIcon } from "./DropletIcon"

type Row = {
  borrow: React.ReactNode
  collateral: React.ReactNode
  bestRateChain: React.ReactNode
  supplyAPI: number
  borrowABR: number
  integratedProtocols: string[]
  safetyRating: string
  availableLiquidity: number
}

type MarketsTableRowProps = {
  row: Row
  expandRow: boolean
  setExpandRow: React.MouseEventHandler<HTMLTableCellElement>
  extra?: boolean
}

export default function MarketsTableRow({
  row,
  expandRow,
  extra,
}: MarketsTableRowProps) {
  const { palette } = useTheme()

  return (
    <>
      <TableRow>
        <TableCell align="center">{row.borrow}</TableCell>
        <TableCell align="center">{row.collateral}</TableCell>
        <TableCell align="center">{row.bestRateChain}</TableCell>
        <TableCell align="center" sx={{ color: palette.success.main }}>
          {row.supplyAPI.toFixed(2)} %
        </TableCell>
        <TableCell align="center" sx={{ color: palette.warning.main }}>
          <Grid container alignItems="center" justifyContent="center">
            {extra && <DropletIcon />}
            {row.borrowABR.toFixed(2)} %
          </Grid>
        </TableCell>
        <TableCell align="center">
          <Grid container justifyContent="center">
            {row.integratedProtocols.map((vault, i) => (
              <Box
                sx={{
                  position: "relative",
                  right: `${i * 0.25}rem`,
                  zIndex: 50 + -i,
                }}
                key={vault}
              >
                {i <= 2 && (
                  <Image
                    src={`/assets/images/protocol-icons/tokens/${vault}.svg`}
                    height={24}
                    width={24}
                    alt={vault}
                  />
                )}
              </Box>
            ))}
            {row.integratedProtocols.length >= 4 && (
              <Chip
                label={
                  <Grid container justifyContent="center">
                    +{row.integratedProtocols.length - 3}
                  </Grid>
                }
                variant="number"
              />
            )}
          </Grid>
        </TableCell>
        <TableCell align="center">
          {row.safetyRating === "A+" ? (
            <Chip variant="success" label={row.safetyRating} />
          ) : (
            <Chip variant="warning" label={row.safetyRating} />
          )}
        </TableCell>
        <TableCell align="center">
          $
          {row.availableLiquidity
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </TableCell>
      </TableRow>
      <Collapse in={expandRow} timeout="auto" unmountOnExit>
        <TableRow>
          <TableCell />
          <TableCell />
          <TableCell align="center">{row.bestRateChain}</TableCell>
          <TableCell align="center" sx={{ color: palette.success.main }}>
            {row.supplyAPI.toFixed(2)} %
          </TableCell>
          <TableCell align="center">{row.borrowABR}</TableCell>
          <TableCell align="center">{row.integratedProtocols}</TableCell>
          <TableCell align="center">{row.safetyRating}</TableCell>
          <TableCell align="center">{row.availableLiquidity}</TableCell>
        </TableRow>
      </Collapse>
    </>
  )
}
