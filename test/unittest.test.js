const cds = require("@sap/cds");

const { expect, GET, POST } = cds.test.in(__dirname, "..").run(

    "serve", "--with-mocks", "--in-memory");


  console.log("my last commit")

describe("Testing OData APIs", () => {

  it("test status codes", async () => {

    const { data } = await GET`/odata/v4/escalation-management/Statuses?$select=code`;

    expect(data.value).to.eql([

    //   { code: "CMP" },

      { code: "DRF" },

      { code: "INP" },

    ]);

  });

 

  // it("test action resolve", async () => {

  //   // Step 1: Create the draft data

  //   const { data: draft } = await POST`/odata/v4/escalation-management/Escalations ${{

  //     description: "test",

  //     purchaseOrder_ID: "9000000001",

  //     expectedDate: "2022-05-27",

  //   }}`;

 

  //   // Step 2: Save the draft to create a new escalation

  //   const { data: post } = await POST(

  //     `/odata/v4/escalation-management/Escalations(ID=${draft.ID},IsActiveEntity=false)/EscalationManagementService.draftActivate`

  //   );

 

  //   // Step 3: Read the escalation before executing the resolve action

  //   let {

  //     data: readBeforeAction,

  //   } = await GET`/odata/v4/escalation-management/Escalations(ID=${post.ID},IsActiveEntity=true)`;

 

  //   // Step 4: Check if the initial status is 'INP - In process

  //   expect(readBeforeAction.status_code).to.eql("INP");

 

  //   // Step 5: Perform Resolve Action

  //   console.log(draft.ID)

  //   await POST`/odata/v4/escalation-management/Escalations(ID=${draft.ID},IsActiveEntity=false)/EscalationManagementService.resolve`;

 

  //   // Step 6: Read the escalation after executing the resolve action

  //   let {

  //     data: readAfterAction,

  //   } = await GET`/odata/v4/escalation-management/Escalations(ID=${post.ID},IsActiveEntity=true)`;

 

  //   // Step 7: Check if the escalation is updated to the status 'CMP' - Completed

  //   expect(readAfterAction.status_code).to.eql("CMP");

  // });

});