import { SearchIcon, XIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { taskItems, taskLable, taskPriorityItems, taskPriorityLabel } from "@/redux/features/task";
import { chanageQueryFilter, chanageStatusFilter, changePriorityFilter, changeSortFilter, clearFilters, SelectPriorityFilter, SelectSortMode, SelectStatusFilter, type TSorttype } from "@/redux/features/filters";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";



const SORT_LABEL: Record<TSorttype, string> = {
  newest: "Newest first",
  oldest: "Oldest first",
};

export function FiltersBar() {

  const dispatch = useAppDispatch()
  const status = useAppSelector(SelectStatusFilter)
  const priority = useAppSelector(SelectPriorityFilter)
  const sort = useAppSelector(SelectSortMode)

  return (
    <Card className="flex flex-col gap-3 p-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search tasks…" className="pl-9"
          onChange={(e) => dispatch(chanageQueryFilter(e.target.value))}
        />
      </div>

      <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center">
        <Select
          value={status}
          onValueChange={(value) => dispatch(chanageStatusFilter(value))}
        >
          <SelectTrigger className="min-w-[7.5rem]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            {
              taskItems.map((s) => <SelectItem key={s} value={s}>{taskLable[s]}</SelectItem>)
            }
          </SelectContent>
        </Select>

        <Select value={priority}
          onValueChange={(value) => dispatch(changePriorityFilter(value))}
        >
          <SelectTrigger className="min-w-[7.5rem]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All priorities</SelectItem>
            {taskPriorityItems.map((s) => <SelectItem key={s} value={s}>{taskPriorityLabel[s]}</SelectItem>)}

          </SelectContent>
        </Select>

        <Select value={sort}
          onValueChange={(value) => dispatch(changeSortFilter(value))}
        >
          <SelectTrigger className="min-w-[7.5rem]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {(Object.keys(SORT_LABEL) as TSorttype[]).map((s) => (
              <SelectItem key={s} value={s}>
                {SORT_LABEL[s]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button variant="ghost" size="sm" onClick={() => dispatch(clearFilters())}>
        <XIcon className="size-4" /> Clear
      </Button>
    </Card>
  );
}
