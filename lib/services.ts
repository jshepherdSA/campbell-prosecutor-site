import type { Block } from "@/components/blocks";
import { circuitClerk, countyAttorney, type Office } from "@/lib/directory";

/**
 * The service pages.
 *
 * Every program here except felony prosecution and victim assistance is run by
 * the Campbell County Attorney's Office, a separate office. The details (fees,
 * hours, eligibility, what to bring) are as that office published them in
 * October 2026 and were written up in our own words. They are that office's to
 * change, so re-check them before launch and from time to time after.
 */

export type ServiceLink = { label: string; href: string };

export type Service = {
  /** Site path. */
  href: string;
  title: string;
  /** One line for the services index and the page description. */
  summary: string;
  lead: string;
  /** The main action, shown as a button above the contact details. */
  cta?: ServiceLink;
  /** Who to contact. Omitted for the two pages that have their own layout. */
  offices?: Office[];
  sections?: { title: string; blocks: Block[] }[];
  links?: ServiceLink[];
  faqs?: { q: string; a: string[] }[];
};

/** The County Attorney's courthouse office, for matters outside its criminal work. */
const courthouseOffice: Office = {
  ...countyAttorney.criminal,
  name: countyAttorney.name,
};

const civilOffice: Office = {
  ...countyAttorney.civil,
  hours: "Monday to Friday, 9 a.m. to 4 p.m.",
};

const districtClerk: Office = {
  ...circuitClerk,
  name: "Campbell District Court Clerk",
};

const source = "https://www.campbellcountyattorney.com";

export const prosecution: Service = {
  href: "/prosecution",
  title: "Prosecution",
  summary:
    "Felony cases in Campbell Circuit Court, from the grand jury through sentencing.",
  lead: "",
};

export const victimAssistance: Service = {
  href: "/victims",
  title: "Victim Assistance",
  summary:
    "Your rights as a crime victim, what to expect from the prosecutor, and where to find help.",
  lead: "",
};

export const badCheckProgram: Service = {
  href: "/services/bad-check-program",
  title: "Bad Check Program",
  summary:
    "How a business or person paid with a bad check can recover the money, at no cost.",
  lead: "A business or person who is paid with a check the bank returns can get help recovering the money. The Campbell County Attorney’s Office runs the program, and it costs the person who received the check nothing.",
  offices: [civilOffice],
  sections: [
    {
      title: "How the program works",
      blocks: [
        {
          type: "p",
          text: "Writing a check you know the bank will not pay is usually a crime in Kentucky, theft by deception (KRS 514.040). A collection agency can only ask for the money. A prosecutor’s office can also bring a charge.",
        },
        {
          type: "ol",
          items: [
            "Bring the returned check to the County Attorney’s office at 319 York Street in Newport.",
            "The office writes to the person who wrote the check, giving ten days to pay it along with a fee. The letter explains how to pay online, by mail or by phone.",
            "If the check is paid, the office sends you the money. Payments are mailed out on two set days each month.",
            "If it is not paid within ten days, the office asks you to sign a criminal complaint for theft by deception.",
            "The check writer is summoned to court. You do not have to attend the first hearing, the arraignment.",
            "If the person pleads guilty, the court orders the check repaid. If the plea is not guilty, the case is set for trial and you will probably be called as a witness. Trials are rare.",
          ],
        },
      ],
    },
    {
      title: "What to bring",
      blocks: [
        {
          type: "ul",
          items: [
            "The returned check, showing the bank’s stamp",
            "The check writer’s street address. Court papers cannot be served on a post office box.",
            "For a criminal charge, the check writer’s date of birth, Social Security number or driver’s license number",
            "A completed intake form, linked on this page",
          ],
        },
      ],
    },
    {
      title: "Checks that qualify",
      blocks: [
        {
          type: "ul",
          items: [
            "Checks the bank stamped Account Closed, No Account, Unable to Locate or Nonsufficient Funds",
            "Checks stamped Refer to Maker, Held Funds, Overdraft, Uncollected Funds Hold, No Debits Allowed or Unavailable Funds, when you also have a bank statement showing the state of the account on the day the check was written",
            "Checks presented to the bank within 30 days of the date on the check, as shown by the bank’s stamp",
          ],
        },
        {
          type: "p",
          text: "Act quickly. Most bad check cases are misdemeanors, and a misdemeanor charge has to be started within one year. A check for $1,000 or more can be charged as a felony.",
        },
      ],
    },
    {
      title: "Checks that do not qualify",
      blocks: [
        {
          type: "ul",
          items: [
            "Post-dated checks, and checks you agreed to hold before depositing",
            "Two-party checks",
            "Checks on which payment was stopped, unless they were written to a licensed bingo operator",
            "Checks you accepted knowing there was not enough money in the account",
            "Checks given as payment on a loan, a payment agreement or an open account",
            "Checks from a writer you cannot identify, and checks with no amount or no signature",
            "Checks drawn on a frozen or blocked account",
            "Checks that show only a post office box as the address",
            "Business account checks, unless the Kentucky Secretary of State’s records confirm that the person who signed had authority to",
            "Rent checks, unless the tenant was given possession in exchange (keys, or the first month’s rent) or wrote the check under threat of eviction",
          ],
        },
        {
          type: "p",
          text: "A disagreement over the quality or amount of goods or work is a civil matter and will not be charged.",
        },
      ],
    },
    {
      title: "What it costs",
      blocks: [
        {
          type: "p",
          text: "Nothing, for the person who received the check. The check writer pays the face amount of the check plus a $50 fee for each check.",
        },
      ],
    },
    {
      title: "Protecting yourself from bad checks",
      blocks: [
        {
          type: "ul",
          items: [
            "Ask for official photo identification, and compare the photo and signature with the person in front of you.",
            "Write down the address, date of birth, license number and phone number.",
            "Do not take counter checks, which have no name or address printed on them.",
            "Check that the address printed on the check matches the identification.",
            "Do not accept a post office box as the only address. Write the street address from the identification on the check.",
            "If you have doubts, call the bank before accepting the check.",
            "Fill in the details on the check yourself.",
          ],
        },
        {
          type: "p",
          text: "No one is required to accept a check.",
        },
      ],
    },
  ],
  links: [
    {
      label: "Bad check intake form (PDF)",
      href: `${source}/s/Bad-Check-Intake-Form.pdf`,
    },
    {
      label: "Bad check program brochure (PDF)",
      href: `${source}/s/Brochure-for-Bad-Check.pdf`,
    },
  ],
};

export const caseysLaw: Service = {
  href: "/services/caseys-law",
  title: "Casey’s Law",
  summary:
    "Asking a court to order addiction treatment for a relative or friend.",
  lead: "Casey’s Law lets a relative or friend ask a court to order treatment for someone whose drug or alcohol use has put that person or others in danger. It is a civil process. No criminal charge is involved.",
  offices: [civilOffice, districtClerk],
  sections: [
    {
      title: "When a court can order treatment",
      blocks: [
        {
          type: "p",
          text: "The law’s full name is the Matthew Casey Wethington Act for Substance Abuse Intervention (KRS 222.430 to 222.437). It exists for people whose addiction keeps them from seeing that they need help. A judge can order treatment only when all of these are true:",
        },
        {
          type: "ul",
          items: [
            "The person has a substance use disorder.",
            "Because of it, the person is an imminent danger to themselves, their family or others, or there is a substantial likelihood of that danger in the near future.",
            "The person can reasonably benefit from treatment.",
          ],
        },
      ],
    },
    {
      title: "The steps",
      blocks: [
        {
          type: "ol",
          items: [
            "Fill out the petition, form AOC-700A, and sign it in front of a notary. The petition can ask for a 72-hour emergency hold, 60 days of treatment or 360 days of treatment.",
            "File the petition with the District Court Clerk at the Campbell County Courthouse, 330 York Street in Newport.",
            "Give the clerk the names of two qualified health professionals who will evaluate the person. At least one must be a physician.",
            "The court reviews the petition and has the Sheriff deliver a copy to the person. If the judge finds probable cause, the court orders the two evaluations and sets a hearing within 14 days.",
            "Both professionals examine the person no later than 24 hours before the hearing.",
            "Their written reports must reach the clerk at least 24 hours before the hearing.",
            "Before the hearing, contact treatment providers and arrange a place.",
            "At the hearing, the judge decides whether the conditions above are met and, if they are, orders treatment for the period requested.",
            "The person who filed arranges the treatment and gets the person to the facility.",
          ],
        },
      ],
    },
    {
      title: "What it costs",
      blocks: [
        {
          type: "p",
          text: "The person who files is responsible for the cost of the evaluations and of the treatment, and must sign a guarantee of payment. These costs can be substantial. Ask the treatment provider what insurance will cover before you file.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Will the person face criminal charges?",
      a: [
        "No. Casey’s Law is about getting someone into treatment, even if that person does not yet see the need for it. Nothing about it is a criminal case.",
      ],
    },
  ],
  links: [
    {
      label: "Petition for involuntary treatment, AOC-700A (PDF)",
      href: "https://www.kycourts.gov/Legal-Forms/Legal%20Forms/700A.pdf",
    },
    {
      label: "Casey’s Law brochure (PDF)",
      href: `${source}/s/Caseys-Law-Brochure-4hx5.pdf`,
    },
    {
      label: "Treatment provider list (PDF)",
      href: `${source}/s/Caseys-Law-Provider-List-sbhh.pdf`,
    },
  ],
};

export const childSupport: Service = {
  href: "/services/child-support",
  title: "Child Support",
  summary:
    "Establishing paternity and setting, collecting and changing child support.",
  lead: "The Campbell County Attorney’s Child Support Division works with the state to establish and collect child support. Either parent, or a relative raising a child, can ask for help.",
  offices: [countyAttorney.childSupport],
  sections: [
    {
      title: "What the division does",
      blocks: [
        {
          type: "ul",
          items: [
            "Locates parents who owe support",
            "Establishes paternity, at either parent’s request",
            "Obtains court orders for financial support and medical support",
            "Collects support and enforces orders",
            "Reviews orders and asks the court to change them when circumstances change",
          ],
        },
        {
          type: "p",
          text: "By its own count the division handles about 4,800 cases and collects more than $8 million a year.",
        },
      ],
    },
    {
      title: "Opening a case",
      blocks: [
        {
          type: "p",
          text: "Ask for help at the division’s office and fill out the intake forms. Staff first check whether the child’s legal father has been established.",
        },
        {
          type: "p",
          text: "Support cannot be ordered until parentage is legally established, so where it has not been, the office files a paternity case. A paternity case must be filed before the child turns 18. If it is filed before the child turns four, the support order can reach back to the child’s date of birth.",
        },
      ],
    },
    {
      title: "How the amount is set",
      blocks: [
        {
          type: "p",
          text: "The court uses Kentucky’s child support guidelines (KRS 403.211 and 403.212), which are based mainly on the parents’ combined income and the number of children. The judge can depart from the guidelines for good reason. The state’s child support website has a calculator.",
        },
      ],
    },
    {
      title: "Changing an order",
      blocks: [
        {
          type: "p",
          text: "An order can be changed only when circumstances have changed in a way that is substantial and continuing (KRS 403.213). A change of 15 percent or more in the amount owed each month is presumed to be enough.",
        },
        {
          type: "p",
          text: "Either parent can ask for a review. So can a relative who has custody of the child, such as a grandparent, aunt or uncle.",
        },
      ],
    },
    {
      title: "When support is not paid",
      blocks: [
        {
          type: "p",
          text: "Once a parent is behind by one month’s support, ask your caseworker to enforce the order. The tools include:",
        },
        {
          type: "ul",
          items: [
            "Withholding support from wages or unemployment benefits",
            "Court action for contempt, which can lead to jail",
            "Taking state and federal tax refunds and lottery winnings",
            "Liens on property and levies on bank accounts",
            "Suspending or denying a driver’s license, a professional license or a hunting and fishing license",
            "Denying a passport",
          ],
        },
      ],
    },
    {
      title: "Making payments",
      blocks: [
        {
          type: "p",
          text: "Support payments go to the state’s central collection unit, not to the local office: Division of Child Support, P.O. Box 14059, Lexington, KY 40512. Put the paying parent’s name and case number on every payment. The state’s website also takes payments and shows account history.",
        },
        {
          type: "p",
          text: "The only payment the local office accepts is the fee for genetic testing, by check or money order.",
        },
      ],
    },
    {
      title: "Reporting where a parent is",
      blocks: [
        {
          type: "p",
          text: "If you know where to find a parent who owes support and is avoiding it, tell the Child Support Division. The County Attorney’s website has a form for this. Give as much detail as you can, along with your own name and a phone number or email address.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What information helps establish a support order?",
      a: [
        "The other parent’s address, Social Security number, date of birth, employer, bank accounts, property and investments. Old insurance policies, credit applications, tax returns, hospital and police records and birth certificates are good places to look. Bring any existing court orders and records of payments.",
        "With a date of birth and the names of the parent’s own parents, or with a Social Security number, the agency can search state and federal records. Those searches can take several months.",
      ],
    },
    {
      q: "When does child support end?",
      a: [
        "Normally when the child turns 18. If the child is still a full-time high school student, support continues, but not past the end of the school year in which the child turns 19 (KRS 405.020).",
      ],
    },
    {
      q: "Can support be paid by direct deposit?",
      a: [
        "Yes. Ask your caseworker for the application, or request it through the state’s child support website.",
      ],
    },
    {
      q: "What if the other parent lives in another state?",
      a: [
        "You can still open a case at the local office, which works with the other state to establish or enforce the order. Cases across state lines usually take longer.",
      ],
    },
    {
      q: "Do I still have to pay if I am not allowed to see my children?",
      a: [
        "Yes. Support and visitation are separate, and court-ordered support must be paid either way. If a court has ordered visitation and it is being denied, you can ask that court to enforce its order.",
      ],
    },
  ],
  links: [
    {
      label: "Kentucky Child Support: payments, accounts and forms",
      href: "https://kentuckychildsupport.ky.gov/",
    },
    {
      label: "Report where a parent is (County Attorney’s form)",
      href: `${source}/child-support-form`,
    },
    {
      label: "Federal Office of Child Support Services",
      href: "https://www.acf.hhs.gov/css",
    },
  ],
};

export const delinquentTaxes: Service = {
  href: "/services/delinquent-tax-collection",
  title: "Delinquent Tax Collection",
  summary:
    "What happens to an unpaid property tax bill, and how to pay or set up a plan.",
  lead: "An unpaid property tax bill becomes a lien that grows with interest and fees, and it can be sold to a private buyer. The Campbell County Attorney’s Office collects these bills and can set up a payment plan.",
  offices: [civilOffice],
  sections: [
    {
      title: "How a tax bill becomes delinquent",
      blocks: [
        {
          type: "ol",
          items: [
            "Tax bills usually go out in October. Whoever owned the property on January 1 of that year is personally responsible for the tax.",
            "Bills are paid to the Sheriff’s Office through April 15.",
            "A bill still unpaid after April 15 goes to the County Clerk. It is then a certificate of delinquency, recorded as a lien against the property.",
            "The amount owed grows by 12 percent a year in interest, with fees and penalties on top.",
            "After 90 days, an unpaid certificate can be sold to a private buyer. The County Clerk’s first sale of the year is usually held in August.",
          ],
        },
        {
          type: "p",
          text: "Kentucky’s rules for delinquent property taxes are in KRS Chapter 134.",
        },
      ],
    },
    {
      title: "If your bill is sold",
      blocks: [
        {
          type: "p",
          text: "A private buyer can add substantial costs and fees of its own, and you then deal with that buyer rather than with the county. The County Attorney’s office tries to warn owners by regular mail before a sale.",
        },
        {
          type: "p",
          text: "A certificate cannot be sold while the owner has a payment plan with the County Attorney’s office, or while the property is in a pending foreclosure or bankruptcy case involving that office.",
        },
      ],
    },
    {
      title: "Paying in full",
      blocks: [
        {
          type: "p",
          text: "A certificate that has not been sold is paid, with interest, at the Campbell County Clerk’s Office, 1098 Monmouth Street, Suite 204, in Newport.",
        },
        {
          type: "ul",
          items: [
            "By mail: certified check, cashier’s check or money order",
            "In person: cash or credit card (Visa, MasterCard or Discover)",
            "Personal checks and payments by phone are not accepted",
          ],
        },
        {
          type: "p",
          text: "If the certificate has been sold, contact the buyer to find out how to pay.",
        },
      ],
    },
    {
      title: "Payment plans",
      blocks: [
        {
          type: "p",
          text: "If the certificate has not been sold, the County Attorney’s office can set up monthly payments. A plan starts when you sign the agreement and make the first payment.",
        },
        {
          type: "ul",
          items: [
            "Plans generally run four to eight months, depending on the size of the bill and your income.",
            "Payments are due by the 15th of each month, by cashier’s check, money order, personal check or cash, made out to the Campbell County Attorney. Credit cards are not accepted.",
            "Interest keeps adding up during the plan, but the certificate cannot be sold while the plan is in good standing.",
            "One missed payment ends the plan, and the bill can then be sold.",
          ],
        },
        {
          type: "p",
          text: "To ask for a plan, call the Civil Division, go to 319 York Street in person, or use the request form on the County Attorney’s website.",
        },
      ],
    },
    {
      title: "Asking for a penalty to be waived",
      blocks: [
        {
          type: "p",
          text: "Penalties can be waived only in the limited situations state law allows (KRS 131.081(6) and 103 KAR 1:040). They include:",
        },
        {
          type: "ul",
          items: [
            "Relying on wrong written advice from the Department of Revenue or a local official",
            "The death or serious illness of the taxpayer, a close family member or the tax preparer",
            "An unavoidable absence",
            "Records destroyed by a fire, flood or other disaster",
            "Undue hardship, an honest mistake or no earlier experience with the tax",
          ],
        },
        {
          type: "p",
          text: "Send the waiver request form and supporting documents to the County Attorney’s Civil Division. The County Clerk, the Sheriff and the County Attorney must all agree, and any one of them can refuse. A decision usually takes seven to ten business days.",
        },
      ],
    },
    {
      title: "Disputing an assessment",
      blocks: [
        {
          type: "p",
          text: "Questions about what a property is assessed at go to the Property Valuation Administrator. The County Attorney’s office represents that office in assessment appeals.",
        },
      ],
    },
  ],
  links: [
    {
      label: "Sheriff’s tax bill lookup",
      href: "https://sheriff.campbellcountykentucky.com/",
    },
    {
      label: "Campbell County Clerk",
      href: "https://campbell.countyclerk.us/",
    },
    {
      label: "Property Valuation Administrator",
      href: "https://pva.campbellcountykentucky.com/",
    },
    {
      label: "Payment plan and waiver forms (County Attorney)",
      href: `${source}/delinquent-tax-collection`,
    },
    {
      label: "Private buyers of tax bills (Department of Revenue)",
      href: "https://revenue.ky.gov/Property/Pages/Third-Party-Purchaser.aspx",
    },
  ],
};

export const fiscalCourtAdvisor: Service = {
  href: "/services/fiscal-court-advisor",
  title: "Fiscal Court Advisor",
  summary:
    "The County Attorney’s role as the lawyer for Campbell County government.",
  lead: "Kentucky law makes the County Attorney the lawyer for county government. In Campbell County that means advising the Fiscal Court, county officers, boards and commissions on the county’s business.",
  offices: [civilOffice],
  sections: [
    {
      title: "What the law requires",
      blocks: [
        {
          type: "p",
          text: "Under KRS 69.210 the County Attorney attends the meetings of the Fiscal Court and conducts the county’s legal business wherever its rights or interests are involved. The County Attorney advises county government, not private residents.",
        },
      ],
    },
    {
      title: "What the work includes",
      blocks: [
        {
          type: "ul",
          items: [
            "Advising on county policy",
            "Reviewing county contracts and other legal agreements",
            "Advising on personnel and employment matters",
            "Drafting and enforcing county ordinances",
            "Collecting delinquent taxes",
            "Overseeing the payment of claims against the county and opposing improper ones",
            "Bringing and defending civil cases in which the county has an interest",
            "Reviewing applications for entertainment permits",
            "Representing the county when an open records decision is appealed",
            "Representing the Property Valuation Administrator in assessment appeals",
            "Training election officers and advising the county board of elections",
            "Assisting with coroner’s inquests",
            "Providing legal training and preparing legal documents for county offices",
          ],
        },
      ],
    },
  ],
  links: [
    {
      label: "Campbell County Fiscal Court",
      href: "https://campbellcountyky.gov/",
    },
    {
      label: "County elected officials",
      href: "https://campbellcountyky.gov/officials/",
    },
    {
      label: "Code of Ordinances",
      href: "https://campbellcountyky.gov/division/blocks.php?structureid=46",
    },
    {
      label: "Campbell County Clerk",
      href: "https://campbell.countyclerk.us/",
    },
    {
      label: "Property Valuation Administrator",
      href: "https://pva.campbellcountykentucky.com/",
    },
    {
      label: "Campbell County Sheriff’s Office",
      href: "https://www.campbellcountysheriffky.org/",
    },
  ],
};

export const guardianships: Service = {
  href: "/services/guardianships",
  title: "Guardianships",
  summary:
    "Asking a court to appoint someone to care for an adult who cannot manage alone.",
  lead: "When an adult can no longer manage personal or financial affairs, a court can appoint someone to do it. The case is heard in District Court, and the County Attorney represents the Commonwealth.",
  offices: [courthouseOffice],
  sections: [
    {
      title: "Guardian or conservator",
      blocks: [
        {
          type: "ul",
          items: [
            "A guardian makes decisions about a person’s personal affairs, such as where they live, their health care and their daily needs.",
            "A conservator manages only money and property.",
            "A limited guardian or conservator has authority only over the areas the court names, such as health care decisions.",
            "Co-guardians share the role and must act together, so both are needed to sign documents or attend appointments.",
          ],
        },
      ],
    },
    {
      title: "When to ask",
      blocks: [
        {
          type: "p",
          text: "Anyone concerned for the person’s welfare can file. Common reasons include:",
        },
        {
          type: "ul",
          items: [
            "Serious mental illness or dementia has left an adult unable to meet daily needs. The signs can be poor nutrition, unpaid bills, poor hygiene or wandering.",
            "The person who has been caring for the adult is abusing, neglecting or exploiting them.",
            "An adult has an intellectual disability, or a brain injury from a serious accident.",
          ],
        },
      ],
    },
    {
      title: "The steps",
      blocks: [
        {
          type: "ol",
          items: [
            "File a Petition to Determine if Disabled (form AOC-740) and an Application for Appointment of Fiduciary (AOC-745) with the clerk of the District Court in the county where the person lives. The petition asks for the person’s name, address and date of birth, the nature of the disability and the facts behind it, their finances, their next of kin, and any power of attorney or health care surrogate already in place (KRS 387.530).",
            "If the person’s health, safety or property is in immediate danger, also file the emergency application (AOC-747) with a letter from a care provider explaining the emergency. The court holds a hearing within a week, with at least 48 hours’ notice (KRS 387.740).",
            "The court appoints a lawyer for the person if they do not have one. You may hire your own lawyer, but you do not have to.",
            "The court appoints a team of three, a physician, a psychologist and a social worker, to meet the person. Each files a report.",
            "When all three reports are in, the court holds a hearing, usually before a jury. The person normally attends unless that would put them at serious risk. The decision is whether the person is wholly or partly unable to manage personal affairs, financial affairs or both.",
            "If so, the judge chooses the guardian or conservator and signs an order that sets out any limits. The order is also recorded with the County Clerk.",
          ],
        },
      ],
    },
    {
      title: "What it costs",
      blocks: [
        {
          type: "p",
          text: "The County Attorney’s office lists the filing fee for an adult guardianship as $121.50. Confirm the current amount with the clerk. If the person cannot afford a lawyer, the court pays for the one it appoints.",
        },
      ],
    },
    {
      title: "Duties after appointment",
      blocks: [
        {
          type: "ul",
          items: [
            "Stay in regular contact with the person.",
            "Use only as much authority as the person needs.",
            "Involve the person in decisions as far as possible.",
            "Act in the person’s best interest and avoid conflicts of interest.",
            "Keep the person’s information private.",
            "File a report on the person’s condition every year (form AOC-790).",
            "If you manage money, file a financial report every two years.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Who can serve as a guardian or conservator?",
      a: [
        "A family member or another interested adult can ask to be appointed. If there is no suitable person who is willing and able, the Cabinet for Health and Family Services can serve for people in its care.",
      ],
    },
    {
      q: "What is the difference between guardianship and conservatorship?",
      a: [
        "A guardian has authority over personal affairs. A conservator has authority only over property and money. A conservatorship can be full, limited, temporary or shared.",
      ],
    },
  ],
  links: [
    {
      label: "Petition to Determine if Disabled, AOC-740 (PDF)",
      href: "https://www.kycourts.gov/Legal-Forms/Legal%20Forms/740.pdf",
    },
    {
      label: "Application for Appointment of Fiduciary, AOC-745 (PDF)",
      href: "https://www.kycourts.gov/Legal-Forms/Legal%20Forms/745.pdf",
    },
    {
      label: "Emergency appointment application, AOC-747 (PDF)",
      href: "https://www.kycourts.gov/Legal-Forms/Legal%20Forms/747.pdf",
    },
    {
      label: "Annual Report of Guardian, AOC-790 (PDF)",
      href: "https://www.kycourts.gov/Legal-Forms/Legal%20Forms/790.pdf",
    },
    {
      label: "Guardianship packet (County Attorney, PDF)",
      href: `${source}/s/Guardianship-Packet.pdf`,
    },
    {
      label: "Campbell District Court’s guardianship restrictions (PDF)",
      href: `${source}/s/Adult-Guardianship-Restrictions-Campbell-County-District-Court.pdf`,
    },
    {
      label: "Kentucky Guardianship Association",
      href: "https://www.kyguardianship.org/",
    },
  ],
};

export const involuntaryTreatment: Service = {
  href: "/services/involuntary-treatment",
  title: "Involuntary Treatment",
  summary:
    "Court-ordered hospitalization for a person with a serious mental illness.",
  lead: "A person with a serious mental illness who is a danger to themselves or others, and who is too ill to seek care, can be hospitalized by court order. Kentucky’s rules are in KRS Chapter 202A.",
  offices: [civilOffice],
  sections: [
    {
      title: "In a crisis",
      blocks: [
        {
          type: "p",
          text: "If someone is in immediate danger, call 911. For a mental health crisis, call or text 988, or call NorthKey Community Care’s 24-hour crisis line at (859) 331-3292.",
        },
      ],
    },
    {
      title: "When a court can order hospitalization",
      blocks: [
        {
          type: "p",
          text: "All of these must be true (KRS 202A.026):",
        },
        {
          type: "ul",
          items: [
            "The person has a mental illness.",
            "Because of it, the person is a danger or a threat of danger to themselves, their family or others. That includes being unable to provide for basic needs such as food, clothing or shelter.",
            "The person can reasonably benefit from treatment.",
            "Hospitalization is the least restrictive kind of treatment available.",
          ],
        },
      ],
    },
    {
      title: "The steps",
      blocks: [
        {
          type: "ol",
          items: [
            "File a petition for involuntary hospitalization, form AOC-710, in District Court. It asks for either 60 or 360 days.",
            "The petition must give your relationship to the person; the person’s name, home and present location; the names of a parent, guardian or spouse if known; and the facts that make you believe the person is mentally ill and dangerous. A 360-day request also needs proof that the person was hospitalized for at least 30 days in the past six months.",
            "The court sets a preliminary hearing within six days to decide whether the person should be held.",
            "Two qualified mental health professionals examine the person and certify their findings within 24 hours.",
            "A final hearing follows within 21 days.",
          ],
        },
      ],
    },
    {
      title: "How long it can last",
      blocks: [
        {
          type: "p",
          text: "A court order cannot run longer than the 60 or 360 days asked for in the petition (KRS 202A.051). Separately, in an emergency a hospital can hold a person for evaluation for up to 72 hours, not counting weekends and holidays.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Will the person be held in jail?",
      a: [
        "No. A person is not held in jail while waiting for an evaluation or for transport to a hospital, unless there are also criminal charges pending.",
      ],
    },
    {
      q: "What does “mentally ill person” mean in the law?",
      a: [
        "It means a person whose ability to use self-control, judgment or discretion in handling their own affairs and relationships is substantially impaired by a mental condition.",
      ],
    },
    {
      q: "What about addiction to drugs or alcohol?",
      a: [
        "That is a different process, Casey’s Law, which has its own page under Services.",
      ],
    },
  ],
  links: [
    {
      label: "Court forms library (search for AOC-710)",
      href: "https://www.kycourts.gov/Legal-Forms/Pages/default.aspx",
    },
    {
      label: "NorthKey Community Care",
      href: "https://www.northkey.org/",
    },
  ],
};

export const juvenileCourt: Service = {
  href: "/services/juvenile-court",
  title: "Juvenile Court",
  summary:
    "Cases about children: abuse and neglect, status offenses and offenses by minors.",
  lead: "Cases about children are heard in Campbell District Court and Family Court, where the County Attorney represents the Commonwealth. They fall into three groups.",
  offices: [countyAttorney.criminal],
  sections: [
    {
      title: "Reporting abuse or neglect",
      blocks: [
        {
          type: "p",
          text: "If a child is in immediate danger, call 911. To report suspected abuse or neglect, call Kentucky’s reporting line at (877) 597-2331. Everyone in Kentucky is required by law to report it.",
        },
      ],
    },
    {
      title: "Dependency, neglect and abuse cases",
      blocks: [
        {
          type: "p",
          text: "These cases ask whether a child is dependent, neglected or abused. They are civil, not criminal, and their aim is to protect the child and, through treatment and services, reunite the family. A criminal case about the same abuse can go on at the same time.",
        },
        {
          type: "ol",
          items: [
            "A person who knows the facts files a petition, form AOC-DNA-1, explaining why the child is believed to be dependent, neglected or abused.",
            "The Cabinet for Health and Family Services is notified at once and assesses whether the child is safe.",
            "Within 72 hours the Cabinet gives a written report of its investigation to the County Attorney and local police.",
            "The court holds a hearing on whether there are reasonable grounds to believe the child would be at risk if left with, or returned to, the parent or caretaker.",
            "At the adjudication hearing the judge decides whether what the petition says is true.",
            "At disposition the judge decides what is best for the child. The options include an informal adjustment, protective orders with supervision at home, removal from the caretaker, or commitment to the Cabinet until 18, which can be extended to 21 to help an older youth move into adult life (KRS 620.140).",
          ],
        },
        {
          type: "p",
          text: "Kentucky law says every child has a right to adequate food, clothing and shelter, to be free from physical, sexual and emotional harm, to an education, and to a secure and stable family (KRS 620.010).",
        },
      ],
    },
    {
      title: "Status offenses",
      blocks: [
        {
          type: "p",
          text: "A status offense is conduct that is against the law only because of a person’s age: skipping school, running away again and again, or being beyond the control of parents or school (KRS 630.020). These cases are prepared by a Court Designated Worker, who tries first to resolve them without a court hearing, and are usually heard in Family Court.",
        },
      ],
    },
    {
      title: "Public offenses",
      blocks: [
        {
          type: "p",
          text: "A public offense is an act by a minor that would be a crime if an adult did it. Most are heard in the juvenile session of District Court.",
        },
        {
          type: "p",
          text: "The most serious cases can be moved to Circuit Court, where the young person is tried as an adult and this office prosecutes (KRS 635.020). First a District Judge must find probable cause, then weigh:",
        },
        {
          type: "ul",
          items: [
            "How serious the offense is, and whether it was against a person or against property",
            "The young person’s maturity and prior record",
            "The best interests of the young person and the community",
            "Whether the public can be adequately protected",
            "How likely rehabilitation is within the juvenile system",
            "Any evidence of gang involvement",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is “the Cabinet”?",
      a: [
        "The Cabinet for Health and Family Services, the state agency responsible for child protection. Its Child Protective Services workers investigate reports of abuse and neglect.",
      ],
    },
    {
      q: "Can a child be removed from a home before a court hearing?",
      a: [
        "Yes, under an emergency custody order, but only in extraordinary cases where the child is in immediate danger.",
      ],
    },
    {
      q: "What does it mean when a report is “substantiated”?",
      a: [
        "Each investigation ends as substantiated or unsubstantiated. Unsubstantiated means there was not enough credible evidence to conclude that neglect or abuse took place.",
      ],
    },
    {
      q: "Can parents get their children back?",
      a: [
        "Often, yes. The court reviews each case regularly, and the first goal is to reunite the family once the problems that led to removal have been treated. In the most serious cases parental rights can be ended and a permanent home found for the child.",
      ],
    },
    {
      q: "Are juvenile court records public?",
      a: [
        "No. They are confidential. They can be shared only with the child, the child’s parent, guardian or spouse, victims and others allowed to attend the hearing, and the lawyers in the case.",
      ],
    },
  ],
  links: [
    {
      label: "Dependency, neglect or abuse petition, AOC-DNA-1 (PDF)",
      href: "https://www.kycourts.gov/Legal-Forms/Legal%20Forms/DNA-1.pdf",
    },
    {
      label: "Report abuse or neglect online",
      href: "https://prd.webapps.chfs.ky.gov/reportabuse/home.aspx",
    },
  ],
};

export const trafficDiversion: Service = {
  href: "/traffic-diversion",
  title: "Traffic Diversion",
  summary:
    "The CATS program: resolving some traffic tickets with an online course.",
  lead: "Some traffic tickets can be resolved with a one-hour online course in place of a court date. The program is called CATS, and the Campbell County Attorney’s Office runs it.",
  cta: {
    label: "Register for CATS",
    href: "https://www.advent-elearning.net/Registration/CATSRegistration",
  },
  offices: [countyAttorney.criminal],
  sections: [
    {
      title: "What the program does",
      blocks: [
        {
          type: "p",
          text: "CATS is the County Attorney Traffic Safety program. It is voluntary. If you qualify, you pay a fee and complete an online course. The County Attorney’s office then has the citation dismissed, so it does not go on your driving record and adds no points to your license.",
        },
      ],
    },
    {
      title: "Tickets that qualify",
      blocks: [
        {
          type: "ul",
          items: [
            "Speeding, up to 25 mph over the limit",
            "Disregarding a traffic signal, sign or stop sign",
            "Loud exhaust",
            "Failure to use headlights",
            "Improper equipment",
            "Failure to use a child restraint",
            "Failure to signal, or improper signaling",
            "Improper passing",
            "Careless or reckless driving",
            "Failure to yield to a stopped emergency vehicle",
          ],
        },
      ],
    },
    {
      title: "Who cannot use it",
      blocks: [
        {
          type: "ul",
          items: [
            "Anyone who has already paid the ticket",
            "Anyone who has signed up for State Traffic School for the same ticket",
            "Holders of a Kentucky commercial driver’s license",
            "Anyone who used the program in the past year",
            "Drivers cited for speeding 26 mph or more over the limit",
            "Drivers cited for careless or reckless driving on the AA Highway",
          ],
        },
        {
          type: "p",
          text: "The County Attorney’s office decides who is eligible. If you are not sure, call before your court date.",
        },
      ],
    },
    {
      title: "How to sign up",
      blocks: [
        {
          type: "ol",
          items: [
            "Register online, or in person at the County Attorney’s office on the third floor of the courthouse.",
            "You will receive a letter and an email with a username and password.",
            "Follow the payment and course instructions that come with them.",
            "Pay the fee and complete the one-hour online course. A Spanish version is available.",
            "The County Attorney’s office has the citation dismissed.",
          ],
        },
      ],
    },
    {
      title: "What it costs",
      blocks: [
        {
          type: "p",
          text: "The County Attorney’s office lists these approximate fees, which depend on how many points the citation would have carried:",
        },
        {
          type: "ul",
          items: [
            "No points: $145",
            "Three points: $175",
            "More than three points: $205",
            "Paying by credit card adds $5",
          ],
        },
      ],
    },
    {
      title: "Your other options",
      blocks: [
        {
          type: "p",
          text: "No one has to use the program. You keep the right to plead not guilty and have a trial, and every other right the law gives you.",
        },
      ],
    },
  ],
  links: [
    {
      label: "CATS program website",
      href: "https://www.catsprogram.com/",
    },
  ],
};

/** Listed on the services index and in the Services menu, in this order. */
export const services: Service[] = [
  prosecution,
  victimAssistance,
  badCheckProgram,
  caseysLaw,
  childSupport,
  delinquentTaxes,
  fiscalCourtAdvisor,
  guardianships,
  involuntaryTreatment,
  juvenileCourt,
];
