import { useState, useEffect } from "react";
import { Settings } from "lucide-react";
import {
  useChainConfigStore,
  PRIORITY_RATE,
  SLIPPAGE,
} from "@/hooks/use-chain-config";
import { Input } from "./ui";
import { Button } from "./ui/button";
import {
  Credenza,
  CredenzaTrigger,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaDescription,
  CredenzaBody,
  CredenzaFooter,
} from "./ui/credenza";
import { Label } from "./ui/label";
import { FormDescription } from "./ui/form";
import { Badge } from "./ui/Badge";

const ChainConfig = () => {
  const { priorityFee, slippage, setPriorityFee, setSlippage } =
    useChainConfigStore();
  const [priorityFeeError, setPriorityFeeError] = useState("");
  const [modifiedPriorityFee, setModifiedPriorityFee] = useState(
    priorityFee.toString()
  );
  const [modifiedSlippage, setModifiedSlippage] = useState(
    (slippage / 100).toString()
  );
  const [slippageError, setSlippageError] = useState("");
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    if (isNaN(Number(modifiedPriorityFee))) {
      setPriorityFeeError("Invalid priority fee. Please enter a valid number.");
      return;
    }
    if (isNaN(Number(modifiedSlippage) * 100)) {
      setSlippageError("Invalid slippage. Please enter a valid number.");
      return;
    }
    setPriorityFeeError("");
    setSlippageError("");
    setPriorityFee(Number(modifiedPriorityFee));
    setSlippage(Number(modifiedSlippage));
    setOpen(false);
  };

  return (
    <div>
      <Credenza open={open} onOpenChange={(open) => setOpen(open)}>
        <CredenzaTrigger>
          <Badge variant="secondary" className="cursor-pointer">
            <Settings size={16} className="transition-all" />
          </Badge>
        </CredenzaTrigger>
        <CredenzaContent>
          <CredenzaHeader>
            <CredenzaTitle>Swap Config</CredenzaTitle>
          </CredenzaHeader>
          <CredenzaBody>
            <div className="space-y-4">
              <div>
                <Label>Max Slippage</Label>
                <Input
                  type="text"
                  value={modifiedSlippage}
                  onChange={(e) => setModifiedSlippage(e.target.value)}
                  placeholder="Enter max slippage"
                />
                {slippageError && (
                  <p className="text-sm text-red-500 mt-2">{slippageError}</p>
                )}
                <span className="text-xs text-muted-foreground">
                  Modify the max slippages for your trades. Default:{" "}
                  {SLIPPAGE / 100}%
                </span>
              </div>
              <div>
                <Label>Priority Fee</Label>
                <Input
                  type="text"
                  value={modifiedPriorityFee}
                  onChange={(e) => setModifiedPriorityFee(e.target.value)}
                  placeholder="Enter priority fee"
                />
                {priorityFeeError && (
                  <p className="text-sm text-red-500 mt-2">
                    {priorityFeeError}
                  </p>
                )}
                <span className="text-xs text-muted-foreground">
                  Modify the custom priority fee. Default: {PRIORITY_RATE}{" "}
                  lamports
                </span>
              </div>
            </div>
          </CredenzaBody>
          <CredenzaFooter>
            <Button onClick={handleSave}>Save</Button>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    </div>
  );
};

export default ChainConfig;
