import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '@/components/ui/table';
  
  export default function RecentRunningBook() {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
        <div className="max-w-3xl w-full">
          <h1 className="mb-2">Currently Reading or Read Soon Lists</h1>
          <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
            <Table>
              <TableCaption>A list of your Currently Reading or Read Soon List.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">#</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
  