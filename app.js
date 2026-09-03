const planData = {
  starter:{name:'Basic Starter', principal:245, spouse:215, child:150, summary:'An affordable entry-level option for essential everyday healthcare support.', benefits:[['GP + medication','3 visits'],['OTC / Pharmacy','M750 per annum'],['Specialist & acute medication','Subject to plan rules'],['Basic pathology','Referral and authorisation apply'],['Basic radiology','X-rays and ultrasounds subject to rules'],['Additional benefits','See policy schedule for applicable limits']]},
  saver:{name:'Basic Saver', principal:455, spouse:345, child:270, summary:'A stronger everyday medical aid option with broader benefit limits.', benefits:[['GP + medication','4 visits'],['OTC / Pharmacy','M750 per annum'],['Basic pathology','Referral and authorisation apply'],['Basic radiology','X-rays and ultrasounds subject to rules'],['Maternity / Dentistry','Applicable plan limits'],['Basic optometry','Applicable plan limits']]},
  plus:{name:'Basic Plus', principal:835, spouse:515, child:400, summary:'The most comprehensive of the three published low-cost medical aid options.', benefits:[['GP + medication','5 visits'],['OTC / Pharmacy','M1,000 per annum'],['Basic pathology','Enhanced plan limits'],['Basic radiology','X-rays and ultrasounds subject to rules'],['Maternity / Dentistry','Applicable plan limits'],['Basic optometry','Applicable plan limits']]}
};
const planName=document.getElementById('planName');
const planSummary=document.getElementById('planSummary');
const principalPrice=document.getElementById('principalPrice');
const spousePrice=document.getElementById('spousePrice');
const childPrice=document.getElementById('childPrice');
const benefitGrid=document.getElementById('benefitGrid');
const qPlan=document.getElementById('qPlan');
function money(v){return 'M'+Number(v).toLocaleString('en-US')}
function setPlan(key){
  const p=planData[key];
  planName.textContent=p.name;
  planSummary.textContent=p.summary;
  principalPrice.textContent=money(p.principal)+' / month';
  spousePrice.textContent=money(p.spouse)+' / month';
  childPrice.textContent=money(p.child)+' / month';
  benefitGrid.innerHTML=p.benefits.map(([a,b])=>`<div class="benefit"><b>${a}</b><small>${b}</small></div>`).join('');
  document.querySelectorAll('.plan-tab').forEach(btn=>{const active=btn.dataset.plan===key;btn.classList.toggle('active',active);btn.setAttribute('aria-selected',active?'true':'false')});
  qPlan.value=key;
  updateEstimate();
}
document.querySelectorAll('.plan-tab').forEach(btn=>btn.addEventListener('click',()=>setPlan(btn.dataset.plan)));
setPlan('starter');
const modal=document.getElementById('quoteModal');
const closeQuote=document.getElementById('closeQuote');
const qSpouse=document.getElementById('qSpouse');
const qChildren=document.getElementById('qChildren');
const estimateValue=document.getElementById('estimateValue');
const estimateBreakdown=document.getElementById('estimateBreakdown');
const waQuote=document.getElementById('waQuote');
function openQuote(){modal.hidden=false;modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';setTimeout(()=>closeQuote.focus(),0);updateEstimate()}
function closeModal(){modal.hidden=true;modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('[data-quote]').forEach(el=>el.addEventListener('click',openQuote));
closeQuote.addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeModal()});
function updateEstimate(){
  const p=planData[qPlan.value];
  const spouse=Number(qSpouse.value); const children=Number(qChildren.value);
  const total=p.principal + spouse*p.spouse + children*p.child;
  estimateValue.textContent=money(total);
  const parts=['1 principal']; if(spouse)parts.push('1 spouse'); if(children)parts.push(children+' child'+(children===1?'':'ren'));
  estimateBreakdown.textContent=p.name+' • '+parts.join(' • ');
  const msg=`Hello Guardrisk, I would like a medical aid quotation. Plan: ${p.name}. Family: ${parts.join(', ')}. Estimated base premium: ${money(total)} per month.`;
  waQuote.href='https://wa.me/26662720488?text='+encodeURIComponent(msg);
}
[qPlan,qSpouse,qChildren].forEach(el=>el.addEventListener('change',updateEstimate));
