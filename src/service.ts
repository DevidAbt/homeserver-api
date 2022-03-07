import { exec, execSync } from "child_process";

const temp = () => {
  const sensors = JSON.parse(Buffer.from(execSync("sensors -j")).toString());

  const hddtemp: any = {};
  ["sda", "sdb", "sdc", "sdd", "sde"].forEach((x) => {
    const result = Buffer.from(execSync(`sudo hddtemp /dev/${x}`)).toString();
    if (result) {
      const array = result.split(":");
      hddtemp[array[1].trim()] = parseInt(array[2].replace("°C", ""), 10);
    }
  });

  return {
    fan2: sensors["nct6791-isa-0290"]?.fan2?.fan2_input,
    SYSTIN: sensors["nct6791-isa-0290"]?.SYSTIN?.temp1_input,
    CPUTIN: sensors["nct6791-isa-0290"]?.CPUTIN?.temp2_input,
    GPU: sensors["nouveau-pci-0100"]?.temp1?.temp1_input,
    disks: hddtemp,
  };
};

const suspend = () => exec("sleep 3; sudo pm-suspend");

export default { temp, suspend };
