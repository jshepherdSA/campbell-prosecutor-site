/** The usual stages of a Kentucky felony case, in order. */
export const caseSteps: { title: string; body: string }[] = [
  {
    title: "Investigation and charge",
    body: "Police investigate and file a charge, or the case is presented directly to the grand jury.",
  },
  {
    title: "District Court",
    body: "Most felony cases start in District Court, where a judge sets bond and decides at a preliminary hearing whether there is probable cause to send the case on.",
  },
  {
    title: "Grand jury",
    body: "Twelve citizens hear the evidence in private. If at least nine agree there is enough to proceed, they return an indictment.",
  },
  {
    title: "Circuit Court",
    body: "The defendant is arraigned before a Circuit Judge. Both sides exchange evidence and the court rules on motions. Many cases end here with a guilty plea.",
  },
  {
    title: "Trial",
    body: "At trial the Commonwealth must prove guilt beyond a reasonable doubt. A jury of twelve must agree unanimously on its verdict.",
  },
  {
    title: "Sentencing",
    body: "After a conviction or a guilty plea, the judge imposes the final sentence. Victims may give a statement about how the crime affected them.",
  },
];
