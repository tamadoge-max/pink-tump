import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Transaction {
  date: string;
  username: string;
  earned: number;
  transaction: string;
}

const transactions: Transaction[] = [
  {
    date: "2023-05-01",
    username: "john_doe",
    earned: 10.5,
    transaction: "0x123456789abcdef",
  },
  {
    date: "2023-05-02",
    username: "jane_smith",
    earned: 7.25,
    transaction: "0xfedcba9876543210",
  },
  // Add more transactions as needed
];

export const ReferralTable = () => {
  return (
    <Table>
      <TableCaption>Transactions</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Earned</TableHead>
          <TableHead>Transaction</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction, index) => (
          <TableRow key={index}>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>{transaction.username}</TableCell>
            <TableCell>{transaction.earned}</TableCell>
            <TableCell>{transaction.transaction}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
